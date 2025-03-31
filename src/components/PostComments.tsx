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
  console.log("fetch data running: ");
  const atUri = `at://did:plc:laqygfbyvnkyuhsuaxmp6ez3/app.bsky.feed.post/${postId}`;
  const response = await fetch(
    `https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=${encodeURIComponent(
      atUri
    )}`
  );
  const json = await response.json();
  const replies: BlueskyPost[] = json.thread.replies;
  console.log("replies is: ", replies);
  return replies;
};

type PostCommentsProps = {
  postId: string;
};

const PostComments = (props: PostCommentsProps) => {
  const [postsResource] = createResource(
    () => props.postId,
    () => fetchData(props.postId)
  );

  // TODO: use query for caching too? https://docs.solidjs.com/solid-router/reference/data-apis/query
  // TODO: should use suspense https://github.com/solidjs/solid/issues/2388

  return (
    <div>
      Solid posts
      <Switch>
        <Match when={postsResource.loading}>
          <div>Loading!</div>
        </Match>
        <Match when={postsResource()}>
          <ul>
            <For each={postsResource()}>
              {(post) => {
                return (
                  <li>
                    {post.post.author.displayName || post.post.author.handle}
                  </li>
                );
              }}
            </For>
          </ul>
        </Match>
      </Switch>
    </div>
  );
};
export default PostComments;
