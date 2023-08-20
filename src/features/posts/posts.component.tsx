import posts from "./markdown";
import PostsTile from "./postsTile.component";

const Posts = () => (
  <section>
    {Object.keys(posts)
      .sort(
        (a, b) =>
          new Date(posts[b].data.date).getTime() -
          new Date(posts[a].data.date).getTime()
      )
      .map((id: string) => {
        return <PostsTile key={id} id={id} post={posts[id]} />;
      })}
  </section>
);

export default Posts;
