import {
  createResource,
  For,
  Match,
  Show,
  Switch,
  type Component,
} from "solid-js";

const createPostLink = (post: BlueskyPost) => {
  const rkey = post.post.uri.split("post/")[1];
  const replyLink = `https://bsky.app/profile/${post.post.author.handle}/post/${rkey}`;
  return replyLink;
};

type StatsProps = {
  link: string;
  replyCount: number;
  repostCount: number;
  likeCount: number;
  variant: "small" | "large";
};

const Stats: Component<StatsProps> = (props) => {
  const isLarge = props.variant === "large";
  const size = isLarge ? "20" : "16";

  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      class={`flex gap-2 ${isLarge ? "text-base" : "text-xs"}`}
    >
      <span class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z"></path>
        </svg>
        {props.replyCount}
        <Show when={isLarge}> replies</Show>
      </span>
      <span class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M222,48V96a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h33.52L183.47,72a81.51,81.51,0,0,0-57.53-24h-.46A81.5,81.5,0,0,0,68.19,71.28a6,6,0,1,1-8.38-8.58,93.38,93.38,0,0,1,65.67-26.76H126a93.45,93.45,0,0,1,66,27.53l18,18V48a6,6,0,0,1,12,0ZM187.81,184.72a81.5,81.5,0,0,1-57.29,23.34h-.46a81.51,81.51,0,0,1-57.53-24L54.48,166H88a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V174.48l18,18.05a93.45,93.45,0,0,0,66,27.53h.52a93.38,93.38,0,0,0,65.67-26.76,6,6,0,1,0-8.38-8.58Z"></path>
        </svg>
        {props.repostCount}
        <Show when={isLarge}> reposts</Show>
      </span>
      <span class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill="CurrentColor"
          viewBox="0 0 256 256"
        >
          <path d="M178,42c-21,0-39.26,9.47-50,25.34C117.26,51.47,99,42,78,42a60.07,60.07,0,0,0-60,60c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42ZM128,217.11C111.59,207.64,30,157.72,30,102A48.05,48.05,0,0,1,78,54c20.28,0,37.31,10.83,44.45,28.27a6,6,0,0,0,11.1,0C140.69,64.83,157.72,54,178,54a48.05,48.05,0,0,1,48,48C226,157.72,144.41,207.64,128,217.11Z"></path>
        </svg>
        {props.likeCount}
        <Show when={isLarge}> likes</Show>
      </span>
    </a>
  );
};

type BlueskyPost = {
  post: {
    uri: string;
    author: {
      avatar: string;
      // Can be an empty string
      displayName: string;
      handle: string;
      did: string;
    };
    record: {
      text: string;
    };
    indexedAt: string;
    likeCount: number;
    repostCount: number;
    replyCount: number;
  };
  replies?: BlueskyPost[];
};

const fetchData = async (postId: string) => {
  const atUri = `at://did:plc:laqygfbyvnkyuhsuaxmp6ez3/app.bsky.feed.post/${postId}`;
  const response = await fetch(
    `https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=${encodeURIComponent(
      atUri
    )}`
  );
  const json: { thread: BlueskyPost } = await response.json();
  return json.thread;
};

const PostComment: Component<{ post: BlueskyPost }> = (props) => {
  const profileLink = `https://bsky.app/profile/${props.post.post.author.handle}`;
  const replyLink = createPostLink(props.post);

  return (
    <>
      <div class="p-2 mt-2">
        <a
          href={profileLink}
          target="_blank"
          rel="noopener noreferrer"
          class="flex gap-2 items-center text-sm no-underline"
        >
          <img
            src={props.post.post.author.avatar}
            alt={`${
              props.post.post.author.displayName ||
              props.post.post.author.handle
            }'s avatar`}
            class="size-4 rounded-full"
          />
          <Show when={props.post.post.author.displayName}>
            <span>{props.post.post.author.displayName}</span>
          </Show>
          <span
            class={`${
              props.post.post.author.displayName
                ? "text-[var(--text-secondary)]"
                : ""
            }`}
          >
            @{props.post.post.author.handle}
          </span>
        </a>
        <div class="text-sm mt-1">{props.post.post.record.text}</div>
        <div class="mt-2">
          <Stats
            variant="small"
            link={replyLink}
            replyCount={props.post.post.replyCount}
            repostCount={props.post.post.repostCount}
            likeCount={props.post.post.likeCount}
          />
        </div>
      </div>
      <Show when={props.post.replies?.length}>
        <div class="border-l-1 border-neutral-600 pl-2">
          <For each={props.post.replies}>
            {(reply) => {
              return <PostComment post={reply} />;
            }}
          </For>
        </div>
      </Show>
    </>
  );
};

type PostCommentsProps = {
  postId: string;
};

const PostComments = (props: PostCommentsProps) => {
  const [commentsResource] = createResource(
    () => props.postId,
    (postId) => fetchData(postId)
  );

  return (
    <div class="mt-8">
      <Switch>
        <Match when={commentsResource.loading}>
          <>
            <h3 class="mt-4">Comments</h3>
            <div class="max-w-11/12 animate-pulse">
              <div class="h-3 bg-[var(--text-secondary)] rounded-md w-64 mb-2"></div>
              <div class="h-[100px] bg-[var(--text-secondary)] rounded-md"></div>
            </div>
          </>
        </Match>
        <Match when={commentsResource()}>
          {(post) => (
            <>
              <Stats
                variant="large"
                link={createPostLink(post())}
                replyCount={post().post.replyCount ?? 0}
                repostCount={post().post.repostCount ?? 0}
                likeCount={post().post.likeCount ?? 0}
              />
              <h3 class="mt-4">Comments</h3>
              <p class="text-sm">
                Click{" "}
                <a
                  href={createPostLink(post())}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>{" "}
                to join the conversation on Bluesky.
              </p>
              <For each={post().replies}>
                {(comment) => {
                  return <PostComment post={comment} />;
                }}
              </For>
            </>
          )}
        </Match>
      </Switch>
    </div>
  );
};

export default PostComments;
