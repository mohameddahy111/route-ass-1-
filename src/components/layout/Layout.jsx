import React from 'react';
import { Outlet } from 'react-router-dom';
import ContactInfo from '../footer/ContactInfo';
import Navbar from '../navbar/Navbar';

export default function layout() {
  return (
    <>
        <Navbar />
        <Outlet/> 
        <ContactInfo/>
    </>
  );
}
