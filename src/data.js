import uniqid from 'uniqid';

let listData = [
  {
    title: 'A new list',
    id: '2894u7u',
    dateCreated: new Date(),
    items: [
      {
        text: 'I am an item',
        id: uniqid(),
        dateCreated: new Date(),
        completed: false
      },
      {
        text: 'I am another item',
        id: uniqid(),
        dateCreated: new Date(),
        completed: false
      }
    ]
  },
  {
    title: 'Another list',
    id: '834j8jf4',
    dateCreated: new Date(),
    items: [
      {
        text: 'I am item',
        id: uniqid(),
        dateCreated: new Date(),
        completed: false
      },
      {
        text: 'I am also item',
        id: uniqid(),
        dateCreated: new Date(),
        completed: false
      }
    ]
  },
];

function getAllListData() {
  return [ ...listData ];
}

function getListById(id) {
  return { ...listData.find(list => list.id === id) };
}

function createList(title) {
  listData.push({
    title: title,
    id: uniqid(),
    dateCreated: new Date(),
    items: []
  });
}

function updateListItem(listId, itemId, updatedItem) {
  const listIndex = listData.findIndex(list => list.id === listId);
  const itemIndex = listData[ listIndex ].items.findIndex(item => item.id === itemId);
  listData[ listIndex ].items[ itemIndex ] = updatedItem;
}

function deleteListItem(listId, itemId) {
  const listIndex = listData.findIndex(list => list.id === listId);
  const itemIndex = listData[ listIndex ].items.findIndex(item => item.id === itemId);
  listData[ listIndex ].items.splice(itemIndex, 1);
}

function addListItem(listId, text) {
  const listIndex = listData.findIndex(list => list.id === listId);
  listData[ listIndex ].items.push({
    text: text,
    id: uniqid(),
    dateCreated: new Date(),
    completed: false
  });
}

function deleteList(id) {
  const listIndex = listData.findIndex(list => list.id === id);
  listData.splice(listIndex, 1);
}

function updateListTitle(id, newTitle) {
  const listIndex = listData.findIndex(list => list.id === id);
  listData[ listIndex ].title = newTitle;
}

export {
  getAllListData,
  getListById,
  createList,
  updateListItem,
  deleteListItem,
  addListItem,
  deleteList,
  updateListTitle
};