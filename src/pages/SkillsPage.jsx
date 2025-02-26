import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { debounce } from "lodash"; // More optimized import is--> import debounce from "lodash.debounce";
import { fetchSkills } from "../utils/fetchSkills";

const SkillsPage = () => {
    const { department } = useParams();
    const [skills, setSkills] = useState([]);
    const [query, setQuery] = useState(department || "web");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Sync query with department when user navigates via department links
    useEffect(() => {
        setQuery(department || "web");
    }, [department]);

    const fetchDebouncedSkills = useCallback(
        debounce(async (searchTerm) => {
            if (!searchTerm) return;
            setLoading(true);
            try {
                const skillsData = await fetchSkills(searchTerm);
                setSkills(skillsData.data);
                setError(null);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }, 500),
        []
    );

    useEffect(() => {
        fetchDebouncedSkills(query);
        return () => fetchDebouncedSkills.cancel(); // Cleanup debounce on unmount
    }, [query, fetchDebouncedSkills]);

    return (
        <div className="p-4">
            <h1 className="font-bold text-xl text-blue-700 text-center mb-4 capitalize">
                {query} Skills
            </h1>

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

            {/* Loading Spinner */}
            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
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
