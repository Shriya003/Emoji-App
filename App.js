import React, { useState, useEffect } from 'react'
import './App.css';
import EmojiData from './emoji.json';

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = EmojiData.filter(emoji => emoji.name.toLowerCase().includes(search.toLowerCase()));
    setData(newData);
  }, [search])

  return (
    <div>
      <center>
        <h1>😂😜sudhanshu is tony stark😊🤩</h1>
        <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </center>
      {data.map(emoji => <div>

        <div class="card">
          <div class="card-body">
            {emoji.symbol}{emoji.data}
          </div>
        </div>
      </div>)}

    </div>
  );
}

export default App;
