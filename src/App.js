import { useEffect } from "react";
import "./App.css";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c483df6e";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div>
      <h1>Welcome to React</h1>
    </div>
  );
};

export default App;
