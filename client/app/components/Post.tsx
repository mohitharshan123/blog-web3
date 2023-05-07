"use client";

import {
  useContract,
  useContractWrite,
} from "@thirdweb-dev/react";

export default function Post({ post: { content, title, postId } }) {
  const { contract } = useContract(
    "0xD9C00b9ba5aad61428df5550861Ac29f8E233cC9"
  );

  const { mutateAsync: deletePost, isLoading: isDeleting } = useContractWrite(
    contract,
    "deletePost"
  );

  const handleDelete = async (postId: any) => {
    try {
      const data = await deletePost({ args: [postId] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div className="mt-10 rounded-md bg-black w-full p-4 flex flex-col space-y-2 shadow-md">
      <span className="font-bold text-lg text-white">{title}</span>
      <span className="text-md text-gray-300">{content}</span>
      <button className="text-white" onClick={() => handleDelete(postId)}>
        {isDeleting ? "Deleting.." : "Delete"}
      </button>
    </div>
  );
}
