import React from 'react';
import { Link } from 'react-router-dom';

function Adults() {
  return (
    <div>
      <h1>Adults Teams</h1>
      <ul>
        <li>
          <Link to="/teams/adults/Ateam">A-team</Link>
        </li>
      </ul>
    </div>
  );
}

export default Adults;