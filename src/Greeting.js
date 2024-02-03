import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from './redux/actions'; // Import your action

const Greeting = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greetings.randomGreeting);

  useEffect(() => {
    const fetchRandomGreetingFromApi = async () => {
      try {
        // Fetch the random greeting from the Rails API
        const response = await fetch('http://127.0.0.1:3000/random_greeting');
        const data = await response.json();

        // Dispatch the action to store the random greeting in the Redux store
        dispatch(fetchRandomGreeting(data.greeting));
      } catch (error) {
        // Handle errors, e.g., console.error('Error fetching random greeting:', error);
      }
    };

    // Call the fetch function when the component mounts
    fetchRandomGreetingFromApi();
  }, [dispatch]);

  return (
    <div>
      <h1>{randomGreeting}</h1>
    </div>
  );
};

export default Greeting;
