import React, { useState } from 'react';

const UserList = ({ users }) => {
  const calculateWinPercentage = (user) => {
    if (!user.scores) return 0;
    let wins = 0;
    let totalMatches = 0;

    for (const opponent in user.scores) {
      if (user.scores[opponent] === 5) {
        wins++;
      }
      if (user.scores[opponent] !== undefined) {
        totalMatches++;
      }
    }

    return totalMatches ? ((wins / totalMatches) * 100).toFixed(2) : 0;
  };

  const calculateBoutsCompleted = (user) => {
    const totalUsers = users.length - 1; // Excluding themselves
    const completedBouts = Object.keys(user.scores || {}).length;
    return totalUsers ? ((completedBouts / totalUsers) * 100).toFixed(2) : 0;
  };

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Win Rate (%)</th>
            <th>Bouts Completed (%)</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{calculateWinPercentage(user)}%</td>
              <td>{calculateBoutsCompleted(user)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
