import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [dummyData, setDummyData] = useState()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums').then(res => setDummyData(res.data))
  });

  return dummyData ? (
    <div className="App">
      <ul>
        {dummyData.map(data => <li>{data.title}</li>)}
      </ul>
    </div>
  ) : (
    <div>
      <p>Loading dummy data...</p>
    </div>
  )
}

export default App;
