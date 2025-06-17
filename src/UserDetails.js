import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data))
      .catch(() => setError('User not found.'));
  }, [id]);

  if (error) return <p className="text-danger">{error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h4>{user.name}</h4>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <Link to="/" className="btn btn-secondary">Back</Link>
    </div>
  );
}

export default UserDetails;
