import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    async function fetchPost() {
      const { data } = await supabase.from('posts').select('*').eq('id', id).single();
      setTitle(data.title);
      setContent(data.content);
      setImageUrl(data.image_url);
    }
    fetchPost();
  }, [id]);

  async function handleUpdate() {
    await supabase.from('posts').update({ title, content, image_url: imageUrl }).eq('id', id);
    navigate('/feed');
  }

  async function handleDelete() {
    await supabase.from('posts').delete().eq('id', id);
    navigate('/feed');
  }

  return (
    <div className="container">
      <h1>Edit Post</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete} style={{ backgroundColor: 'red', marginTop: '10px' }}>Delete</button>
    </div>
  );
}
