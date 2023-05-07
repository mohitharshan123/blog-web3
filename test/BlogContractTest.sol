// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "../contracts/BlogContract.sol";

contract BlogContractTest {

  BlogContract blog;

  function beforeEach() public {
    blog = new BlogContract();
  }

  function testAddPost() public {
    string memory title = "Test post";
    string memory content = "Test post content";
    address author = address(this);
    uint expectedPostId = 0;
    uint expectedPostsLength = 1;

    blog.addPost(title, content);
    BlogContract.Post[] memory posts = blog.getPosts();

    Assert.equal(posts.length, expectedPostsLength, "Number of posts should be equal to expectedPostsLength");
    Assert.equal(posts[expectedPostId].author, author, "Author of the post should be equal to expected author");
    Assert.equal(posts[expectedPostId].content, content, "Content of the post should be equal to expected content");
  }

  function testDeletePost() public {
    string memory title = "Test post";
    string memory content = "Test post content";
    uint expectedPostsLength = 1;

    blog.addPost(title, content);
    BlogContract.Post[] memory posts = blog.getPosts();

    Assert.equal(posts.length, expectedPostsLength, "Number of posts should be equal to expectedPostsLength");
    uint postId = 0;
    
    blog.deletePost(postId);
    posts = blog.getPosts();

    Assert.equal(posts.length, 0, "Number of posts should be equal to expectedPostsLength");
  }

  function testGetPosts() public {
    string memory title1 = "Test post 1";
    string memory title2 = "Test post 2";
    string memory content1 = "Test post 1";
    string memory content2 = "Test post 2";
    blog.addPost(title1, content1);
    blog.addPost(title2, content2);

    BlogContract.Post[] memory posts = blog.getPosts();

    Assert.equal(posts.length, 2, "Number of posts should be equal to 2");
    Assert.equal(posts[0].title, title1, "Title of the first post should be equal to expected title");
    Assert.equal(posts[1].title, title2, "Title of the second post should be equal to expected title");
    Assert.equal(posts[0].content, content1, "Content of the first post should be equal to expected content");
    Assert.equal(posts[1].content, content2, "Content of the second post should be equal to expected content");
  }
}
