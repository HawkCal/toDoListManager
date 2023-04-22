import { useState } from 'react';
import ListItemEditing from './ListItemEditing';

export default function ({ data, toggleCompleted, deleteItem, submitEdit }) {
  const [ editing, setEditing ] = useState(false);

  function handleChange(e) {
    toggleCompleted(data.id, { ...data, completed: !data.completed });

  }

  function handleClick(e) {
    if (e.target.className.includes('listItemDeleteBtn')) {
      deleteItem(data.id);
    }
    else if (e.target.className.includes('listItemEditBtn')) {
      setEditing(true);
    }
  }

  function cancelEdit() {
    setEditing(false);
  }


  return (
    <li onClick={e => handleClick(e)} className={data.completed ? 'completed' : ''}>
      {
        editing ?
          <ListItemEditing data={data} cancelEdit={cancelEdit} submitEdit={submitEdit} />
          :
          <>
            <div className='listItemLeft'>
              <input type='checkbox' className='listItemCompleted' onChange={e => handleChange(e)} checked={data.completed}></input>
              <p>{data.text}</p>
            </div>
            <div className='listItemRight'>
              <button className='listItemEditBtn'>Edit</button>
              <button className='listItemDeleteBtn'>Delete</button>
            </div>
          </>
      }
    </li>
  );
}