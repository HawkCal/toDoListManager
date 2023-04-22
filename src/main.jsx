import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListsRoute from './routes/Lists';
import ListRoute from './routes/List';
import CreateList from './routes/CreateList';
import './styles/MainStyle.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListsRoute />,
  },
  {
    path: '/lists/:id',
    element: <ListRoute />
  },
  {
    path: '/create',
    element: <CreateList />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
