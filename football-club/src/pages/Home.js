import sponsorsData from '../assets/data/sponsors'
import { useState, useEffect } from 'react';

function Home() {

  const [sponsors, setSponsors] = useState([])

  useEffect(() => {
    setSponsors(sponsorsData);
  }, []);



  return (
    <div className="sponsors-container">
      {sponsors.map((sponsor) => (
        <div key={sponsor.id} className="sponsor-box">
          <a href={sponsor.ref} target="_blank" rel="noopener noreferrer">
            <img src={sponsor.image} alt={sponsor.name} className="sponsor-image" />
            <h3>{sponsor.name}</h3>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Home;
