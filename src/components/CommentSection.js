// src/components/CommentSection.js
import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_id', postId)
      .order('created_at', { ascending: false });

    if (error) console.error(error);
    else setComments(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const { error } = await supabase.from('comments').insert([
      { post_id: postId, content: newComment }
    ]);

    if (error) console.error(error);
    else {
      setNewComment('');
      fetchComments();
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          rows="3"
          style={{ width: '100%', padding: '0.5rem' }}
        ></textarea>
        <button type="submit" style={{ marginTop: '0.5rem' }}>Post Comment</button>
      </form>
      <ul>
        {comments.map((c) => (
          <li key={c.id} style={{ marginTop: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #ddd' }}>
            {c.content} <br />
            <small>{new Date(c.created_at).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
