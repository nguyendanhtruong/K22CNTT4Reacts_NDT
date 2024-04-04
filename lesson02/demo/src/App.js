import logo from './logo.svg';
import './App.css';
import Class_NguyễnDanhTrường from './compoments/Class_NguyễnDanhTrường';
import Func_JSX_NguyễnDanhTrường from './compoments/Func_JSX_NguyễnDanhTrường';
function App() {
  return (
    <section className="App">
      <h1>Demo JSX</h1>
     {/* function Component demo*/}
     <Func_JSX_NguyễnDanhTrường/>
     <Func_JSX_NguyễnDanhTrường fullName="Nguyễn Danh Trường" age="20" />
     <Class_NguyễnDanhTrường/>
     <hr/>
     <Class_NguyễnDanhTrường info="Hocj Reactjs" time="11"/>
    </section>

  );
}

export default App;
