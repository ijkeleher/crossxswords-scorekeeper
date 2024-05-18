// client/src/components/ScoreGrid.js
import React from 'react';

const ScoreGrid = ({ users, onUpdateScore }) => {
  const handleChange = (e, x, y) => {
    const score = parseInt(e.target.value);
    if (score >= 0 && score <= 5) {
      onUpdateScore(x, y, score);
    }
  };

  return (
    <div>
      <h2>Score Grid</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            {users.map(user => (
              <th key={user.name}>{user.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((userX, indexX) => (
            <tr key={userX.name}>
              <td>{userX.name}</td>
              {users.map((userY, indexY) => (
                <td key={userY.name}>
                  {indexX === indexY ? (
                    <div>X</div>
                  ) : (
                    <input 
                      type="number" 
                      min="0" 
                      max="5" 
                      onChange={(e) => handleChange(e, indexX, indexY)} 
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreGrid;
