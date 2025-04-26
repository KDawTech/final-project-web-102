import React, { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import { Link } from 'react-router-dom';

export default function HomeFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) console.error(error);
      else setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1>Home Feed</h1>
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.image_url && <img src={post.image_url} alt="Post" style={{ width: '100%' }} />}
          <br />
          <Link to={`/post/${post.id}`}>View Post</Link>
          <Link to={`/edit/${post.id}`} style={{ marginLeft: '10px' }}>Edit</Link>
        </div>
      ))}
    </div>
  );
}

