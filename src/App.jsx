import { useState } from 'react';
import { getAllListData } from './data';

function App() {
  const [ lists, setLists ] = useState(getAllListData());

  return (
    <div className="App">
      {lists.map(list => <h3>{list.title}</h3>)}
    </div>
  );
}

export default App;
