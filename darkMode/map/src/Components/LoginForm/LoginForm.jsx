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


// import React, { useState } from 'react';

// function LoginForm({ onSubmit }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit({ username, password });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input 
//           type="text" 
//           value={username} 
//           onChange={(event) => setUsername(event.target.value)} 
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input 
//           type="password" 
//           value={password} 
//           onChange={(event) => setPassword(event.target.value)} 
//         />
//       </label>
//       <br />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default LoginForm;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function LoginForm({ onSubmit }) {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
  );
}


