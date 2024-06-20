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
  // du lieu from add/edit
  const [ndtCategoryEdit ,setNdtCategoryEdit]=useState("")

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
  //hàm xử lấy sự kiện xóa  mội đói tượng category
  const ndtHandleDelete= (NdtId)=>{
    console.log ("App-Delete-NdtId",);
    //xoa tren apis
    //const ndtResponse = axios.delete(`https://666c46d949dbc5d7145d6b5a.mockapi.io/NdtApi/ndtv1/NdtCategory/${NdtId}`);
    const ndtResponse = axios.delete(`NdtCategory/${NdtId}`);

    console.log ("ndtResponse-Delete",ndtResponse);
    let ndtDelete = ndtCategories.filter(x=>x.NdtId !==NdtId);
    setNdtCategories(ndtDelete);
    console.log("Delete:",ndtDelete);
  }
  //sua category
  const ndtHandleEdit =( ndtCategory)=>{
    setNdtCategoryEdit(ndtCategory)
    setNdtCategoryIsForm(true);

  }

  return (
    <div className="container border my-3">
      <h1>Nguyễn Danh Trường - Call Api</h1>
      <NdtCategoryList renderNdtCategories ={ndtCategories}
                         onAddNew={ndtHandleAddNew}
                         onNdtDelete={ndtHandleDelete}
                         onNdtEdit={ndtHandleEdit}/>
      <hr/>
      {
        ndtCategoryIsForm===true?   <NdtCategoryForm
                                 rendenrNdtCategory ={ndtCategoryEdit}
                                 oncloseForm={ndtHandleCategoryCloseForm}
                                 onCategorySubmit={ndtHandleCategorySubmit}/>:""
      }
      
    </div>
  );
}

export default NdtApp;

