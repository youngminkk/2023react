import { useState } from 'react';
import logo from './logo.svg';

function App() {
  let [listData, setListData] = useState(1)
  return (
    <div className="App">
      <div>{listData}{test()}</div>
    <button>click</button>
    </div>
  );
}

export default App;
