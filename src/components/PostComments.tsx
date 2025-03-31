import { createResource, For, Match, Switch } from "solid-js";

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
  const replies: BlueskyPost[] = json.thread.replies;
  return replies;
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
      Solid posts
      <Switch>
        <Match when={commentsResource.loading}>
          <div>Loading!</div>
        </Match>
        <Match when={commentsResource()}>
          <div>
            <For each={commentsResource()}>
              {(comment) => {
                return (
                  <div>
                    {/* <img
                      src={comment.post.author.avatar}
                      alt={`${comment.post.author.displayName}'s avatar`}
                      class="avatar"
                    /> */}
                    {comment.post.author.displayName ||
                      comment.post.author.handle}
                  </div>
                );
              }}
            </For>
          </div>
        </Match>
      </Switch>
    </div>
  );
};
export default PostComments;
