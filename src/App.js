import './css/App.css';
import Names from './components/Names';
import Search from './components/Search';
import Header from './components/Header';

import React, { useEffect} from 'react';

function App() {

  const [data, setData] = React.useState(null);


   useEffect(() => {
     fetch("/api")
       .then((res) => res.json())
       .then((data) => setData(data.message));
   }, []);


  return (
    <div className="App">
      <p>{!data ? "Loading..." : data}</p>

      <Header />
      <Search />
      <Names />
    </div>
  );
}

export default App;
