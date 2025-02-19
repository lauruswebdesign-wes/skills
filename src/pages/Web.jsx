import { useState, useEffect } from "react";

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

const Web = () => {
    const [skills, setSkills] = useState([]);
    const [query, setQuery] = useState('')
    // const [uiSkills, setUiSkills] = useState([]);
    // const [webSkills, setWebSkills] = useState([]);
    const [error, setError] = useState(null);

    const filteredSkills = !query ? [] : skills.filter(skill => 
      skill.name.toLowerCase().includes(query)
    );
    console.log(filteredSkills)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const skillsData = await fetchSkills()
          
          setSkills(skillsData.data)

          console.log('All the data:', skillsData)

          // const uiUxSkills = skillsData.data.filter(skill => 
          //   skill.name.toLowerCase().includes('ui/ux')
          // );

          // const skillsWeb = skillsData.data.filter(skill => 
          //   skill.name.toLowerCase().includes('web')
          // );

          // setUiSkills(uiUxSkills)
          // setWebSkills(skillsWeb)
          
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchData();
    }, []);
  
    if (error) return <div>Error loading skills: {error}</div>;
    

    return (
      <div>
        <h1 className='font-bold text-xl text-blue-700 text-center'>Skills</h1>
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
        />
        <ul>
          {filteredSkills.map((skill) => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
      </div>
    );
  }

export default Web
