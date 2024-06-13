import './App.css';
import { React, useEffect, useState} from 'react';
import axios from "axios"
import NdtStudentList from './components/NdtStudentList';



function NdtApp() {
  const [ndtStudentList,setNdtStudentList] = useState([]);
  //get data from api

  const ndtGetStudent = async () => {

    try {

      const response = await axios.get("https://666a9de57013419182d0149f.mockapi.io/api/Ndtv1/Ndtstudent");
      setNdtStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() =>{
    ndtGetStudent();
  },[]);

  return (
    <div className="container border mt-5 p-3">
      <h1 className="text-center my-3">Xử lý chức năng CRUD - HOOK - API</h1>
      <hr />
      <NdtStudentList renderNdtStudentList ={ ndtStudentList}  />
    </div>
  );
}

export default NdtApp;
