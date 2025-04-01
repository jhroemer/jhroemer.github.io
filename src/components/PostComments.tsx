import {
  createResource,
  For,
  Match,
  Show,
  Switch,
  type Component,
} from "solid-js";

type BlueskyPost = {
  post: {
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
  const profileLink = `https://bsky.app/profile/${props.post.post.author.did}`;

  return (
    <>
      <div class="p-2 mt-2">
        {/* TODO: add post timestamp */}
        {/* TODO: no-underline is currently trumped by global css */}
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
          <span>@{props.post.post.author.handle}</span>
        </a>
        <div>{props.post.post.record.text}</div>
        {/* Render as icons */}
        <div class="flex gap-2 text-sm">
          <span>{props.post.post.replyCount} replies</span>
          <span>{props.post.post.repostCount} reposts</span>
          <span>{props.post.post.likeCount} likes</span>
        </div>
        {/* TODO: add replies, likes, reposts */}
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
    () => fetchData(props.postId)
  );

  // TODO: use query for caching too? https://docs.solidjs.com/solid-router/reference/data-apis/query
  // TODO: should use suspense https://github.com/solidjs/solid/issues/2388

  return (
    <div>
      {/* TODO: add svg icons, link to post */}
      <div class="flex gap-2 text-sm">
        <span>{commentsResource()?.post.replyCount} replies</span>
        <span>{commentsResource()?.post.repostCount} reposts</span>
        <span>{commentsResource()?.post.likeCount} likes</span>
      </div>
      {/* TODO: styling, header */}
      <div>Comments</div>

      <Switch>
        <Match when={commentsResource.loading}>
          {/* TODO: improve */}
          <div>Loading!</div>
        </Match>
        <Match when={commentsResource()}>
          <For each={commentsResource()?.replies}>
            {(comment) => {
              return <PostComment post={comment} />;
            }}
          </For>
        </Match>
      </Switch>
    </div>
  );
};
export default PostComments;
