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
  },[]);


  //Trạng thái form 
  const[ndtCategoryIsForm,setNdtCategoryIsForm]=useState(false);
  // du lieu from add/edit
  const [ndtCategoryEdit ,setNdtCategoryEdit]=useState("null");

  const ndtHandleAddNew =(param)=>{
    setNdtCategoryIsForm(param);
    setNdtCategoryEdit(null);
  }
  const ndtHandleCategoryCloseForm=(param)=>{
    setNdtCategoryIsForm(param);
  }
  const ndtHandleCategorySubmit= async (param)=>{
    if (param.NdtId === 0) {
      try {
        const response = await axios.post("NdtCategory", param);
        setNdtCategories([...ndtCategories, response.data]);
      } catch (error) {
        console.error("Error adding category:", error);
      }
    } else {
      try {
        await axios.put(`NdtCategory/${param.NdtId}`, param);
        const updatedCategories = ndtCategories.map((category) =>
          category.NdtId === param.NdtId ? param : category
        );
        setNdtCategories(updatedCategories);
      } catch (error) {
        console.error("Error updating category:", error);
      }
    }
    setNdtCategoryIsForm(false);
  };
  //hàm xử lấy sự kiện xóa  mội đói tượng category
  const ndtHandleDelete= async (NdtId)=>{
    try {
      await axios.delete(`NdtCategory/${NdtId}`);
      const ndtDelete = ndtCategories.filter((x) => x.NdtId !== NdtId);
      setNdtCategories(ndtDelete);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };
  //sua category
  const ndtHandleEdit =( ndtCategory)=>{
    setNdtCategoryEdit(ndtCategory)
    setNdtCategoryIsForm(true);

  }

  return (
    <div className="container border my-3">
      <h1>Nguyễn Danh Trường - Call Api</h1>
      <NdtCategoryList 
      renderNdtCategories ={ndtCategories}
                         onAddNew={ndtHandleAddNew}
                         onNdtDelete={ndtHandleDelete}
                         onNdtEdit={ndtHandleEdit}/>
      <hr/>
      {
        ndtCategoryIsForm===true?   <NdtCategoryForm
        rendenrNdtCategory={ndtCategoryEdit || { NdtId: 0, NdtCategoryName: '', NdtCategoryStatus: true }}
                                 oncloseForm={ndtHandleCategoryCloseForm}
                                 onCategorySubmit={ndtHandleCategorySubmit}/>:""
      }
      
    </div>
  );
}

export default NdtApp;

