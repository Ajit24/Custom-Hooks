import logo from './logo.svg';
import './App.css';
import useFetch from './useFetch/useFetch';
import Nav from './Nav/Nav';

function App() {

  const { data: joke, loading, error, refetch } = useFetch(
    "https://v2.jokeapi.dev/joke/Any"
  );

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);

  return (
    <div className="App">
      <Nav/>
      <div>
     <h2>Custom - Hooks in React.js</h2> <hr />
     
     <h1>
        {joke?.setup} : {joke?.delivery}
      </h1>

      <button onClick={refetch}> Refetch</button>

     </div>
    </div>
  );
}

export default App;
