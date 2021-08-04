import React from "react";
import { useForm } from "react-hook-form";
import { useCreatePost } from "../../../hooks/posts/useCreatePost";

interface FormData {
  title: string;
  body: string;
}

const PostsForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const createPost = useCreatePost();
  const onSubmit = handleSubmit(({ title, body }) => {
    console.log(title, body);
    createPost({ variables: { input: { title, body } } });
  });

  return (
    <div className="posts-form">
      <form onSubmit={onSubmit}>
        <input type="text" {...register("title")} />
        <input type="text" {...register("body")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default PostsForm;
