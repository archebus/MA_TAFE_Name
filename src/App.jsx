// App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [inputName, setInputName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then(response => response.json())
      .then(data => setName(data.name))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSubmit = () => {
    fetch('http://localhost:3001/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: inputName }),
    })
      .then(response => response.json())
      .then(data => {
        setName(data.name);
        setSubmitted(true);
      })
      .catch(error => console.error('Error submitting data:', error));
  };

  return (
    <div>
      {submitted ? (
        <h2>Welcome {name}</h2>
      ) : (
        <>
          <h2>Hello World</h2>
          <p>What is your name?</p>
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
}

export default App;
