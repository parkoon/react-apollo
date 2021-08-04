import { gql, useMutation } from "@apollo/client";

interface CreatePostInput {
  variables: {
    input: {
      title: string;
      body: string;
    };
  };
}

const CREATE_POST = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

export const useCreatePost = () => {
  const [createPost] = useMutation(CREATE_POST);
  return createPost;
};
