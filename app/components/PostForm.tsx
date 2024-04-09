// components/PostForm.tsx
"use client"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/slices/postsSlice';

const PostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addPost({ id: Date.now(), title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border border-gray-400 px-4 py-2 rounded w-full"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="border border-gray-400 px-4 py-2 rounded mt-2 w-full"
      ></textarea>
      <button
        type="submit"
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Post
      </button>
    </form>
  );
};

export default PostForm;
