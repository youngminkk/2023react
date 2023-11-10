import { useState } from 'react';
import logo from './logo.svg';

function App() {
  let [listData, setListData] = useState(1) //model
  return (
    <div className="App">
      <div>{listData}</div>
      ssd
    </div>
  );
}

export default App;