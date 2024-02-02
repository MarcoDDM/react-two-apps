export const FETCH_RANDOM_GREETING_REQUEST = 'FETCH_RANDOM_GREETING_REQUEST';
export const FETCH_RANDOM_GREETING_SUCCESS = 'FETCH_RANDOM_GREETING_SUCCESS';
export const FETCH_RANDOM_GREETING_FAILURE = 'FETCH_RANDOM_GREETING_FAILURE';

export const fetchRandomGreetingRequest = () => ({
  type: FETCH_RANDOM_GREETING_REQUEST,
});

export const fetchRandomGreetingSuccess = (greeting) => ({
  type: FETCH_RANDOM_GREETING_SUCCESS,
  payload: greeting,
});

export const fetchRandomGreetingFailure = (error) => ({
  type: FETCH_RANDOM_GREETING_FAILURE,
  payload: error,
});

export const fetchRandomGreeting = () => {
  return async (dispatch) => {
    dispatch(fetchRandomGreetingRequest());

    try {
      const response = await fetch('http://127.0.0.1:3000/random_greeting');
      const data = await response.json();
      dispatch(fetchRandomGreetingSuccess(data.greeting));
    } catch (error) {
      dispatch(fetchRandomGreetingFailure(error.message));
    }
  };
};
