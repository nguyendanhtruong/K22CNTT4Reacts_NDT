import React,{createContext,useContext ,useState} from 'react'
import NdtUseContext1 from './NdtUseContext1';
export const ThemeContext =createContext();//tạo ngữ cảnh để chia sẻ 

export default function NdtUseContext() {
    // state
    const[theme,setTheme] = useState('red');
    //
    const ndthandlechange =()=>{
        setTheme(theme==='red'?'blue':'red');
    }
  return (
    <ThemeContext.Provider value={theme}>
    <div className='alert'>
        <h2>Demo NdtUseContext</h2>
        <NdtUseContext1/>
        <button onClick={ndthandlechange}>Change bgColor</button>

    </div>
    </ThemeContext.Provider>
  )
}
