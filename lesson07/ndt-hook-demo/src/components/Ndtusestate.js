import React ,{useState}from 'react'

export default function Ndtusestate() {
   //
  const[count,setCount] = useState(10);
  //mang 
  const [list,setlist]=useState([]);
  // hàm xử lý sự kiện thêm ngẫu nhiên
  const ndthandlelist =()=>{
    // sinh ngaau nhiên một giá trị số
    let num =parseInt(Math.random()*100);
    //cập nhật lại state :list
    setlist([
        ...list,
        num
    ])
  }
  return (
    <div>
        <p> you clicked {count} times</p>
        <button onClick ={() => setCount(count + 5)}>
            Click me
        </button>
        <hr/>
        <h3>list: {list.toString()}</h3>
        <button onClick={ndthandlelist}>them ngau nhien</button>
    </div>
  )
}
