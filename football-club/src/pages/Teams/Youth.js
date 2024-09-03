import React from 'react';
import { Link } from 'react-router-dom';

function Youth() {
  return (
    <div>
      <h1>Youth Teams</h1>
      <ul>
        <li>
          <Link to="/teams/youth/junior-younger">Junior Younger</Link>
        </li>
        <li>
          <Link to="/teams/youth/junior-older">Junior Older</Link>
        </li>
        <li>
          <Link to="/teams/youth/youth-younger">Youth Younger</Link>
        </li>
        <li>
          <Link to="/teams/youth/youth-older">Youth Older</Link>
        </li>
      </ul>
    </div>
  );
}

export default Youth;