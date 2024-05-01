import React, { useEffect, useState } from "react";

export default function Github() {
    const [username, setUsername] = useState(""); // State to store the username
    const [data, setData] = useState({}); // State to store user data

    useEffect(() => {
        if (username) { // Fetch data only if username is provided
            fetch(`https://api.github.com/users/${username}`)
                .then(response => response.json())
                .then(data => {
                    setData(data);
                    console.clear();
                    console.log(data);
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [username]); // Trigger useEffect whenever username changes

    const handleSearch = () => {
        // Trigger fetch when search button is clicked
        setUsername(username);
    };

    const handleInputChange = (event) => {
        // Update username state as user types
        setUsername(event.target.value);
    };

    return (
        <div className="container mx-auto max-w-md py-10">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-2xl font-bold mb-4">Github User Search</h1>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={handleInputChange} // Handle input change
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleSearch} // Handle search button click
                    >
                        Search
                    </button>
                </div>
            </div>
            {data.avatar_url && (
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <img
                        className="w-52 rounded-full mx-auto mb-4"
                        src={data.avatar_url}
                        alt="Github Profile"
                    />
                    <h2 className="text-xl font-bold text-center mb-4">{data.name}</h2>
                    <p className="text-center">@{data.login}</p>
                    <p className="text-center text-sm mt-2">{data.bio}</p>
                </div>
            )}
        </div>
    );
}
