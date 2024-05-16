import React,{useState ,useEffect} from  'react'

export default function NdtUseEffect() {
    //
    const [count, setCount ]= useState(0);
    // ham xu ly su kien click me 
    const ndthandleclick =()=>{
        setCount(prev => prev + 1);
    }
    //
    useEffect(() => {
        document.title = `Nguyễn Danh Trường: you clicked ${count} times`;
        console.log(`You clicked ${count} times`);
    });
   //
   useEffect(() =>{
    console.log("chạy một lần đầu tiên - Một lần")
   },[])
   //
   useEffect(() => {
   console.log(`UseEffect count click:`,count)
},[count])
  return (
    <div>
        <h2>Demo -UseEffect: you clicked {count} times</h2>
        <button onClick = { ndthandleclick}>
            Click me
        </button>
    </div>
  )
}
