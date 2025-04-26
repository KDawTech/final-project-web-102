import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../supabaseClient';
import CommentSection from '../components/CommentSection';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase.from('posts').select('*').eq('id', id).single();
      if (error) {
        console.error('Error fetching post:', error);
      } else {
        setPost(data);
      }
    };

    fetchPost();
  }, [id]);

  const handleUpvote = async () => {
    if (!post) return;
  
    const { error } = await supabase
      .from('posts')
      .update({ upvotes: (post.upvotes || 0) + 1 })
      .eq('id', post.id);
  
    if (error) {
      console.error('Error upvoting:', error);
    } else {
      setPost((prev) => ({
        ...prev,
        upvotes: (prev.upvotes || 0) + 1
      }));
    }
  };
  

  if (!post) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {post.image_url && <img src={post.image_url} alt={post.title} style={{ maxWidth: '100%' }} />}
      <p>Upvotes: {post.upvotes}</p>
      <button onClick={handleUpvote} style={{ marginBottom: '20px' }}>👍 Upvote</button>
      <CommentSection postId={post.id} />
    </div>
  );
};

export default PostDetail;

