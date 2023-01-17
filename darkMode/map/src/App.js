// import logo from './logo.svg';
// import './App.css';
// import Map from './Components/Map';
// import LoginForm from './Components/LoginForm/LoginForm';

// function App() {
//   return (
//     <div className="App">
//       {/* <Map/> */}
//       <LoginForm/>
//     </div>
//   );
// }

// export default App;



//import LoginForm from './LoginForm';
import LoginForm from "./Components/LoginForm/LoginForm";

function App() {
  const handleLogin = (data) => {
    // Send a request to the server for authentication
    console.log(data);
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}
export default App;

//AIzaSyAXN9QcZXsmPdZYao0EIEXXPQXpoR-62Gs
