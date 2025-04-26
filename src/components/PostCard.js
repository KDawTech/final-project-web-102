import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>Upvotes: {post.upvotes || 0}</p>
      <Link to={`/post/${post.id}`}>View</Link>
      <br />
      <Link to={`/edit/${post.id}`}>Edit</Link>
    </div>
  );
};

export default PostCard;
