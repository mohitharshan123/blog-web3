"use client";

import {
  useContract,
  useContractWrite,
  useMetamask,
  ConnectWallet,
} from "@thirdweb-dev/react";
import { useRef } from "react";

export default function Add() {
  const titleRef = useRef();
  const contentRef = useRef();
  const { contract } = useContract(process.env.CONTRACT_ADDRESS);
  const { mutateAsync: addPost, isLoading: isCreating } = useContractWrite(
    contract,
    "addPost"
  );

  const createPost = async () => {
    try {
      const data = await addPost({
        args: [titleRef.current.value, contentRef.current.value],
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  return (
    <div className="flex flex-col space-y-4">
      <ConnectWallet theme="dark" />
      <form className="flex flex-col space-y-3" onSubmit={createPost}>
        <input className="p-2 rounded-md" placeholder="title" ref={titleRef} />
        <input
          className="p-2 rounded-md"
          placeholder="content"
          ref={contentRef}
        />
        <button
          className="bg-black text-white rounded-xl p-5 w-content"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            createPost();
          }}
        >
          {isCreating ? "Publishing..." : "Publish"}
        </button>
      </form>{" "}
    </div>
  );
}
