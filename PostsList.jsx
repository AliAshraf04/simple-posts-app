import { useState } from "react";
import Post from "./post";
import NewPost from "./NewPost";
import classes from "./PostsLists.module.css";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <div>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No posts found.</h2>
          <p>Start adding some by clicking the "Add Post Here" button.</p>
        </div>
      )}
    </div>
  );
}

export default PostsList;
