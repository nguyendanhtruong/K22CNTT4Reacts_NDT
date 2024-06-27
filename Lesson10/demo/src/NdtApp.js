import { useEffect, useState } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import NdtCategoryList from './components/NdtCategoryList';
import axios from './api/NdtApi';
import NdtCategoryForm from './components/NdtCategoryForm';


function NdtApp() {
  //lấy dữ liệu từ api
  const[ndtCategories,setNdtCategories] =useState ([]);


  const getCategories =async ()=>{
    try {
      const ndtCateResponse = await axios.get("NdtCategory") ;
      setNdtCategories(ndtCateResponse.data);
      
    } catch (error) {
      console.log("lỗi:",error); 
    }
  }
  useEffect(()=>{
    getCategories();
    console.log("ndtCategories:",ndtCategories);  
  },[])


  //Trạng thái form 
  const[ndtCategoryIsForm,setNdtCategoryIsForm]=useState(false);

  const ndtHandleAddNew =(param)=>{
    setNdtCategoryIsForm(param);
  }
  const ndtHandleCategoryCloseForm=(param)=>{
    setNdtCategoryIsForm(param);
  }
  const ndtHandleCategorySubmit=(param)=>{
    let id =ndtCategories[ndtCategories.length-1].NdtId;
    console.log ("ma",id, param);
    param.NdtId=id+1;
        ndtCategories.push(param);
        setNdtCategories((prev)=>{
          return [...prev];
        })
        setNdtCategoryIsForm(false);
  }
  return (
    <div className="container border my-3">
      <h1>Nguyễn Danh Trường - Call Api</h1>
      <NdtCategoryList renderNdtCategories ={ndtCategories}
                         onAddNew={ndtHandleAddNew}/>
      <hr/>
      {
        ndtCategoryIsForm===true?   <NdtCategoryForm
                                 oncloseForm={ndtHandleCategoryCloseForm}
                                 onCategorySubmit={ndtHandleCategorySubmit}/>:""
      }
      
    </div>
  );
}

export default NdtApp;

