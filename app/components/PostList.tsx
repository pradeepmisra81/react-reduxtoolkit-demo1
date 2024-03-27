// components/PostList.tsx
"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { deletePost } from '../../redux/slices/postsSlice';

const PostList: React.FC = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deletePost(id));
  };

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="border p-4 mt-4">
          <h3 className="text-lg font-bold">{post.title}</h3>
          <p className="mt-2">{post.description}</p>
          <button
            onClick={() => handleDelete(post.id)}
            className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
