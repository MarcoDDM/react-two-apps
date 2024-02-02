import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [randomGreeting, setRandomGreeting] = useState('');

  useEffect(() => {
    const fetchRandomGreeting = async () => {
      try {
        // Fetch the random greeting from the Rails API
        const response = await fetch('http://127.0.0.1:3000/random_greeting');
        const data = await response.json();

        // Set the random greeting in the state
        setRandomGreeting(data.greeting);
      } catch (error) {
        // console.error('Error fetching random greeting:', error);
      }
    };

    // Call the fetch function when the component mounts
    fetchRandomGreeting();
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      <h1>{randomGreeting}</h1>
    </div>
  );
};

export default Greeting;
