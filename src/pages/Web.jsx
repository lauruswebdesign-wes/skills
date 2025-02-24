import { useState, useEffect } from "react";
import { fetchSkills } from "../utils/fetchSkills";

const Web = () => {
    const [skills, setSkills] = useState([]);
    const [query, setQuery] = useState("web"); // Default to 'web'
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const skillsData = await fetchSkills(query);
                setSkills(skillsData.data);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, [query]);

    if (error) return <div className="text-red-500 text-center">Error loading skills: {error}</div>;

    return (
        <div className="p-4">
            <h1 className="font-bold text-xl text-blue-700 text-center mb-4">Web Skills</h1>
            
            {/* Search Input */}
            <div className="flex justify-center mb-6">
                <input 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border border-gray-300 rounded p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search skills..."
                />
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-5 gap-4 justify-items-center">
              {skills.map((skill) => (
                  <a 
                  key={skill.id} 
                  href={skill.infoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-[200px] h-[130px] bg-white shadow-md rounded-lg p-4 flex flex-col 
                            justify-between transform transition duration-500 ease-in-out 
                            hover:scale-110 hover:shadow-lg cursor-pointer no-underline"
                >
                  <h6 className="font-bold text-center text-blue-600 flex-grow mb-1 line-clamp-3">{skill.name}</h6>
                  <p className="text-sm text-gray-600 text-center">{skill.type.name}</p>
                </a>
                
              ))}
          </div>

        </div>
    );
};

export default Web;
