import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateCommentArgs,
} from "../../../../commons/types/generated/types";

interface IFormCreateOwnerData {
  reply: string;
  images: string[];
}

export const CREATE_COMMENT = gql`
  mutation createComment(
    $createCommentinput: CreateUserInput!
    $cafeinformId: String!
  ) {
    createComment(
      createCommentinput: $createCommentinput
      cafeinformId: $cafeinformId
    ) {
      id
      reply
      like
      time
      user {
        name
        nickname
      }
    }
  }
`;

export const useCreateComment = () => {
  const router = useRouter();
  const [createComment] = useMutation<
    Pick<IMutation, "createComment">,
    IMutationCreateCommentArgs
  >(CREATE_COMMENT);

  const createCommentSubmit = async (data: IFormCreateOwnerData) => {
    try {
      const result = await createComment({
        variables: {
          cafeinformId: router.query.cafeinformId,
          createCommentinput: {
            ...data,
          },
        },
      });
      console.log(result.data);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    createCommentSubmit,
  };
};