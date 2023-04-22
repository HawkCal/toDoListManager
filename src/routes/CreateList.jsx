import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createList } from '../data';
import '../styles/CreateListStyle.css';

export default function CreateList() {
  const navigate = useNavigate();
  const [ value, setValue ] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClick() {
    navigate('/');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (value.length === 0) {
      alert('Title cannot be empty');
    }
    else {
      createList(value);
      navigate('/');
    }
  }

  return (
    <form id='createListForm' onSubmit={e => handleSubmit(e)}>
      <input id='createListInput' type='text' value={value} placeholder='Title' onChange={e => handleChange(e)} />
      <input id='createListSubmit' type='submit' value='Create' />
      <button id='createListCancelBtn' onClick={handleClick}>Cancel</button>
    </form>
  );
}