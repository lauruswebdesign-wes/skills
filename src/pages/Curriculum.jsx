import React, { useEffect, useState } from 'react';

async function getAccessToken() {
    const response = await fetch('https://auth.emsicloud.com/connect/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
        grant_type: 'client_credentials',
        scope: 'emsi_open'
      })
    });
    const data = await response.json();
    return data.access_token;
  }

async function fetchCurricularSkills() {
    const accessToken = await getAccessToken();
    const res = await fetch('https://emsiservices.com/curricular-skills/courses/search', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json'
      }
    });
  
    if (!res.ok) {
        const errorMessage = await res.text();
        console.log("API Error Response:", errorMessage);

      throw new Error('Failed to fetch curricular skills');
    }
  
    return res.json();
  }

const Curriculum = () => {
  const [curricularSkills, setCurricularSkills] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const skillsData = await fetchCurricularSkills();
        setCurricularSkills(skillsData.data);

        console.log('All the Curricular data:', skillsData)

      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error loading curricular skills: {error}</div>;
  }

  return (
    <div>
      <h2>Curriculum Data</h2>
      <ul>
        {curricularSkills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Curriculum;
