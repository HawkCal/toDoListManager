import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addListItem, deleteListItem, getListById, updateListItem, deleteList, updateListTitle } from '../data';
import ListItem from '../components/ListItem';
import '../styles/ListStyle.css';

export default function ListRoute() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ data, setData ] = useState(getListById(id));
  const [ editingTitle, setEditingTitle ] = useState(false);
  const [ titleValue, setTitleValue ] = useState(data.title);
  const [ newItemText, setNewItemText ] = useState('');

  function toggleCompleted(itemId, updatedItem) {
    updateListItem(id, itemId, updatedItem);
    setData(getListById(id));
  }

  function deleteItem(itemId) {
    deleteListItem(id, itemId);
    setData(getListById(id));
  }

  function handleChange(e) {
    if (e.target.className.includes('newItemInput')) {
      setNewItemText(e.target.value);
    }
    else if (e.target.className.includes('editTitleInput')) {
      setTitleValue(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    addListItem(id, newItemText);
    setNewItemText('');
    setData(getListById(id));
  }

  function submitEdit(itemId, updatedItem) {
    updateListItem(id, itemId, updatedItem);
    setData(getListById(id));
  }

  function handleDelete() {
    deleteList(id);
    navigate('/');
  }

  function toggleTitleEdit() {
    if (editingTitle) {
      setEditingTitle(false);
      setTitleValue(data.title);
    }
    else {
      setEditingTitle(true);
    }
  }

  function submitTitleEdit() {
    if (titleValue.length === 0) {
      alert('Title cannot be empty');
    }
    else {
      updateListTitle(id, titleValue);
      setEditingTitle(false);
      setData(getListById(id));
    }
  }

  return (
    <div id='list'>
      {
        editingTitle ?
          <>
            <input type='text' className='editTitleInput' value={titleValue} onChange={e => handleChange(e)} />
            <button id='editTitleBtn' onClick={submitTitleEdit}>Submit</button>
          </>
          :
          <h1>{data.title}</h1>
      }
      <button onClick={toggleTitleEdit}>{editingTitle ? 'Cancel' : 'Edit'}</button>
      <button onClick={handleDelete}>Delete</button>
      <form onSubmit={e => handleSubmit(e)}>
        <input id='createItemInput' type='text' className='newItemInput' value={newItemText} onChange={e => handleChange(e)} />
        <input id='submitItemInput' type='submit' value='Add' />
      </form>
      <ul>
        {
          data.items.map(item => <ListItem key={item.id} data={item} toggleCompleted={toggleCompleted} deleteItem={deleteItem} submitEdit={submitEdit} />)
        }
      </ul>
    </div>
  );
}