export async function getAccessToken() {
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
  
  export async function fetchSkills(query) {
    const accessToken = await getAccessToken();
    const res = await fetch(
      `https://emsiservices.com/skills/versions/latest/skills?q=${query}`, // Add query to the request URL
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json'
        }
      }
    );
  
    if (!res.ok) {
      throw new Error('Failed to fetch skills');
    }
  
    return res.json();
  }
  