"use client";

import { useContract, useContractRead } from "@thirdweb-dev/react";
import React, { useMemo } from "react";
import Add from "./components/Add";
import Post from "./components/Post";

export default function Home() {
  const { contract } = useContract(
    "0xD9C00b9ba5aad61428df5550861Ac29f8E233cC9"
  );
  const { data, isLoading } = useContractRead(contract, "getPosts");

  const parsedPosts = useMemo(
    () =>
      data?.map(({ author, content, title, postId }, i) => ({
        author,
        content,
        title,
        postId,
      })),
    data
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col space-y-4 w-full">
        <Add />
        {isLoading
          ? "Loading..."
          : parsedPosts?.map((post) => <Post key={post.postId} post={post} />)}
      </div>
    </main>
  );
}
