import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { fetchSkills } from "../utils/fetchSkills";
import SearchBar from "../components/SearchBar";

const SkillsPage = () => {
    const { department } = useParams();
    const [skills, setSkills] = useState([]);
    const [query, setQuery] = useState(department || "web");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Update query when department changes
    useEffect(() => {
        setQuery(department || "web");
    }, [department]);

    // Fetch skills only when query changes
    const fetchSkillsData = useCallback(async (searchTerm) => {
        if (!searchTerm) return;
        setLoading(true);
        try {
            const result = await fetchSkills(searchTerm);
            setSkills(result.data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchSkillsData(query);
    }, [query, fetchSkillsData]);

    return (
        <div className="p-4">
            <h1 className="font-bold text-xl text-blue-700 text-center mb-4 capitalize">
                {query} Skills
            </h1>

            <div className="flex flex-col items-center mb-6">
                <label htmlFor="skill-search" className="text-gray-600 text-sm mb-1">
                    Drill deeper below to search and find any skill in the database:
                </label>

                {/* Pass query & setter to child */}
                <SearchBar initialQuery={query} onSearch={setQuery} />
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : error ? (
                <p className="text-red-500 text-center">{error}</p>
            ) : (
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
                            <h6 className="font-bold text-center text-blue-600 flex-grow mb-1 line-clamp-3">
                                {skill.name}
                            </h6>
                            <p className="text-sm text-gray-600 text-center">{skill.type.name}</p>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SkillsPage;
