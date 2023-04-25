import React, { useEffect, useState } from 'react';

const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const key = process.env.REACT_APP_API_KEY;// api key redacted due to gitguardian error

function Quotes() {
  const [quote, displayQuotes] = useState('');// quote state
  const [loading, setLoading] = useState(true);// isLoading state
  const [error, setError] = useState(null);// error state

  useEffect(() => {
    async function fetchData() {
      setLoading(true);// setting loading to true before fetching data
      try {
        // fetching data from url
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': key, // passing in headers as required
          },
        });
        const data = await response.json();// getting response
        displayQuotes(data[0].quote);// passing response to displayQuotes
      } catch (error) { // checking for errors
        setError(error);// passing any errors to setError
      } finally {
        setLoading(false);// changing setLoading to false after data has loaded
      }
    }
    fetchData();// calling fetchdata function
  }, []);// useEffect dependencies remain default

  // if quote is loading display loading
  if (loading) {
    return <div id="loading">Loading...</div>;
  }

  // if fetch returns error then display error
  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  // JSX
  return (
    // append result quote to dom
    <div className="quotes">
      <h3>{quote}</h3>
    </div>
  );
}

export default Quotes;
