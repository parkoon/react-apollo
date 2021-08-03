import React from "react";
import PostsGrid from "../../components/posts/posts-grid/posts-grid.component";

const dummyPost = [
  {
    id: "1",
    title: "Post one",
    body: "Body of post",
  },
];
const Home: React.FC = () => {
  return (
    <div className="home">
      <PostsGrid posts={dummyPost} />
    </div>
  );
};

export default Home;
