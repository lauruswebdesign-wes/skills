import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";

const SearchBar = ({ initialQuery, onSearch }) => {
    const [inputValue, setInputValue] = useState(initialQuery);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        setInputValue(initialQuery);
    }, [initialQuery]);

    const debouncedSearch = useMemo(
        () =>
            debounce((value) => {
                onSearch(value);
            }, 1200),
        [onSearch]
    );

    //so every char I type is triggering debouncedSearch which triggers the data api fetch via onSearch but we don't want the debouncedSearch being recreated on every re-render tyhus we memoize it.

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        debouncedSearch(value);
    };

    const handleFocus = () => {
        setIsFocused(true);
        setInputValue(""); // Clear input on focus
    };

    const handleBlur = () => {
        setIsFocused(false);
        if (!inputValue.trim()) {
            setInputValue(initialQuery); // Restore initial value if empty
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(inputValue);
    };

    return (
        <form onSubmit={handleSubmit} className="relative flex items-center w-full max-w-lg">
            <FaSearch className="absolute left-3 text-gray-400" size={18} />
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="border border-gray-300 rounded-lg p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={isFocused ? "Type a skill (e.g., 'AWS', 'Marketing', 'UX Design, '3D')" : ""}
            />
            <button type="submit" className="hidden">Search</button>
        </form>
    );
};

export default SearchBar;
