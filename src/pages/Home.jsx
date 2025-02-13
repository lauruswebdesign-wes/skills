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
    const [uiSkills, setUiSkills] = useState([]);
    const [webSkills, setWebSkills] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const skillsData = await fetchSkills();
          console.log('All the data:', skillsData)

          const uiUxSkills = skillsData.data.filter(skill => 
            skill.name.toLowerCase().includes('ui/ux')
          );

          const skillsWeb = skillsData.data.filter(skill => 
            skill.name.toLowerCase().includes('web')
          );

          setUiSkills(uiUxSkills)
          setWebSkills(skillsWeb)
          
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchData();
    }, []);
  
    if (error) return <div>Error loading skills: {error}</div>;
    
    console.log('UI/UX Skills-->', uiSkills)
    console.log('Web Skills-->', webSkills)

    return (
      <div>
        <h1>Skills</h1>
        <ul>
          {uiSkills.map((skill) => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
      </div>
    );
  }

export default Home
