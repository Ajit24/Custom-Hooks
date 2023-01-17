// import React, { useState } from 'react';

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = (event) => {
//     console.log("username",   username, 
//     "password", password);
//     event.preventDefault();
//     // Logic for handling form submission and displaying errors
//     if (!username || !password) {
//       setError('Please enter a username and password');
//     } else {
//       setError(null);
//       // Send a request to the server for authentication
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
//       </label>
//       <br />
//       {error && <p>{error}</p>}
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default LoginForm;


import React, { useState } from 'react';

function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input 
          type="text" 
          value={username} 
          onChange={(event) => setUsername(event.target.value)} 
        />
      </label>
      <br />
      <label>
        Password:
        <input 
          type="password" 
          value={password} 
          onChange={(event) => setPassword(event.target.value)} 
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;

