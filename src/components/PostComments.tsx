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
  const json = await response.json();
  const replies: BlueskyPost[] = json.thread?.replies ?? [];
  console.log("replies are: ", replies);
  return replies;
};

const PostComment: Component<{ post: BlueskyPost }> = (props) => {
  return (
    <>
      <div class="p-2 mt-2">
        <div class="flex gap-2 items-center">
          <img
            src={props.post.post.author.avatar}
            alt={`${
              props.post.post.author.displayName ||
              props.post.post.author.handle
            }'s avatar`}
            class="size-4 rounded-full"
          />
          <span class="text-sm">
            {props.post.post.author.displayName ||
              props.post.post.author.handle}
          </span>
        </div>
        <div class="text-sm">{props.post.post.record.text}</div>
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
      Comments
      <Switch>
        <Match when={commentsResource.loading}>
          {/* TODO: improve */}
          <div>Loading!</div>
        </Match>
        <Match when={commentsResource()}>
          <For each={commentsResource()}>
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
