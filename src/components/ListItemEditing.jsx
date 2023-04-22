import { useState } from 'react';

export default function ListItemEditing({ data, submitEdit, cancelEdit }) {
  const [ value, setValue ] = useState(data.text);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClick(e) {
    if (e.target.className.includes('editSubmitBtn')) {
      submitEdit(data.id, { ...data, text: value });
      cancelEdit();
    }
    else if (e.target.className.includes('editCancelBtn')) {
      cancelEdit();
      setValue(data);
    }
  }

  return (
    <>
      <div className='listItemLeft'>
        <input className='editItemInput' type='text' value={value} onChange={e => handleChange(e)} />
      </div>
      <div className='listItemRight'>
        <button className='editSubmitBtn' onClick={e => handleClick(e)}>Submit</button>
        <button className='editCancelBtn' onClick={e => handleClick(e)}>Cancel</button>
      </div>
    </>
  );
}