    import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => setError('Failed to fetch users.'));
  }, []);

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Details</th></tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td><td>{user.email}</td>
              <td><Link to={`/users/${user.id}`} className="btn btn-primary btn-sm">View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
