import React from "react";

const PostsForm: React.FC = () => {
  return (
    <div className="posts-form">
      <form onSubmit={() => {}}>
        <input type="text" name="title" />
        <textarea name="body" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default PostsForm;
