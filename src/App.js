import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Home from './components/home/Home.jsx';
import Layout from './components/layout/Layout.jsx';
import Portfolio from './components/portfolio/Portfolio';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {index :true , element:<Home/>},
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
