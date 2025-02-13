import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



async function getAccessToken() {
    const response = await fetch('https://auth.emsicloud.com/connect/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
        grant_type: 'client_credentials',
        scope: import.meta.env.VITE_SCOPE || 'emsi_open'
      })
    });
    const data = await response.json();
    return data.access_token;
  }

  
  async function fetchSkills() {
    const accessToken = await getAccessToken();
    const res = await fetch('https://emsiservices.com/skills/versions/latest/skills', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json'
      }
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch skills');
    }
  
    return res.json();
  }
  

  const Home = () => {
    const [filteredSkills, setFilteredSkills] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const skillsData = await fetchSkills();
          const filtered = skillsData.data.filter(skill => 
            ['UI/UX Designer', 'Frontend Web Developer'].includes(skill.name)
          );
          setFilteredSkills(filtered);
          console.log(skillsData);
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchData();
    }, []);
  
    if (error) return <div>Error loading skills: {error}</div>;
  
    return (
      <div>
        <h1>Skills</h1>
        <ul>
          {filteredSkills.map((skill) => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
      </div>
    );
  }

export default Home
