import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllListData } from '../data';
import ListCard from '../components/ListCard';
import '../styles/ListsStyle.css';

export default function ListsRoute() {
  const navigate = useNavigate();
  const [ lists, setLists ] = useState(getAllListData());

  function handleClick() {
    navigate('create');
  }

  return (
    <div id='listsMain'>
      <button onClick={handleClick}>New</button>
      <ul id='listsContainer'>
        {lists.map(list => <ListCard key={list.id} data={list} />)}
      </ul>
    </div>
  );
}