import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import ScoreGrid from './components/ScoreGrid';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = (newUser) => {
    setUsers([...users, { ...newUser, wins: 0, losses: 0 }]);
  };

  const handleUpdateScore = (x, y, score) => {
    const newUsers = [...users];
    newUsers[x].scores = newUsers[x].scores || {};
    newUsers[x].scores[y] = score;

    if (score > 0) {
      newUsers[x].wins++;
      newUsers[y].losses++;
    } else {
      newUsers[x].losses++;
      newUsers[y].wins++;
    }

    setUsers(newUsers);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <AddUser onAdd={handleAddUser} />
        <UserList users={users} />
      </div>
      <div className="main">
        <ScoreGrid users={users} onUpdateScore={handleUpdateScore} />
      </div>
    </div>
  );
};

export default App;
