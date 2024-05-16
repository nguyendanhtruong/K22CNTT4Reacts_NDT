import React ,{useContext}from 'react'
import { ThemeContext } from './NdtUseContext'

export default function NdtUseContext2() {
    const theme =useContext(ThemeContext)
  return (
    <div className={theme+'m-3'}>
     <h2>NdtUseContext2</h2>
     ?<p>
        <b>2210900071</b>
        <b>Nguyễn Danh Trường</b>
        <i>K22CNTT4</i>   
     </p>
    </div>
  )
}
