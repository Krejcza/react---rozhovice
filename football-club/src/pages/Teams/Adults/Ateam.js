import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Ateam() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/players');
        setPlayers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>A-team Players</h1>
      <ul>
        {players.map(player => (
          <li key={player._id}>
            {player.name} - {player.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ateam;
