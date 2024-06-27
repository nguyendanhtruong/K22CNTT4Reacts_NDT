import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import axios from './api/NdtApi';
import NdtListUsers from './components/NdtListUsers';

function NdtApp() {

  const [ndtListUsers,setNdtListUsers]= useState([]);


  const ndtGetAllUsers = async () => {
    const ndtResponse = await axios.get("ndtUsers");
    console.log("Api Data :", ndtResponse.data);
    setNdtListUsers(ndtResponse.data)
  }

  useEffect(() => {
    ndtGetAllUsers();
    console.log("State Data :", ndtListUsers);
  }, [])

  return (
    <div className="container border my-3">
      <h1>Nguyễn Danh Trường - Làm việc với Móc API</h1>
      <NdtListUsers  renderNdtListUsers={ndtListUsers}/>
    </div>
  );
}

export default NdtApp;


