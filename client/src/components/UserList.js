// client/src/components/UserList.js
import React from 'react';

const UserList = ({ users }) => {
  const calculateWinPercentage = (user) => {
    const totalMatches = user.wins + user.losses;
    return totalMatches ? ((user.wins / totalMatches) * 100).toFixed(2) : 0;
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            {user.name} - {calculateWinPercentage(user)}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
