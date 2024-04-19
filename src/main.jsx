// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import ReactDOM from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
//import auth from './utils/auth';

import App from './App.jsx';
import Homepage from './pages/Homepage.jsx';
import NewAssignment from './pages/NewAssignment.jsx';
import Search from './pages/Search.jsx';
import Inbox from './pages/Inbox.jsx';
import Login from './pages/Login';


// if (auth.loggedIn()) {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Homepage />,
        }, {
          path: '/login',
          element: <Login />
        }, {
          path: '/newassignment',
          element: <NewAssignment />
        }, {
          path: '/search',
          element: <Search />
        }, {
          path: '/inbox',
          element: <Inbox />
        }
      ],
    },
  ]);
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
// // } else {
// //   const router = createBrowserRouter([
// //     {
// //       path: '/',
// //       element: <App />,
// //       errorElement: <Error />,
// //       children: [
// //         {
// //           index: true,
// //           element: <Homepage />,
// //         }, {
// //           path: '/login',
// //           element: <Login />
// //         },{
// //           path: '*',
// //           element: <Login />
// //         }
// //       ],
// //     },
// //   ]);
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <RouterProvider router={router} />
//   );
// }

