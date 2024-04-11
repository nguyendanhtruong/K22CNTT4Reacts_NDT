import logo from './logo.svg';
import './App.css';
import Ndt_funcdemo from './components/n/ndt_funcdemo';
import Ndt_classcomp from './components/ndt_classcomp';
function App() {
  const users ={
    userName:"k22cntt4",
    password:"123456789",
    fistName:"Nguyễn Danh ",
    lastName:"Trường"
  }
  //khai báo đối tượng hàm 
  function formatName(user) {
    return <h2>xin chao, {users.fistName}{users.lastName}</h2>
  }
  return (
    <div className="App">
    {/* Biểu thức jsx */}
    <div>
     <p> fullName: {users.fistName}{users.lastName}</p>
    {formatName(users)}
    </div>
    {/*sử dụng functiono component*/}
    <div>
<Ndt_funcdemo/>
      <Ndt_classcomp company="fit-NTU -K22CNTT4" course="ReactJs1"/>
      <Ndt_classcomp company="fit-NTU -K22CNTT4" course="ReactJs2"/>
      <Ndt_classcomp company="fit-NTU -K22CNTT4" course="ReactJs3"/>

    </div>
    <div>
     <Ndt_classcomp/>
     <Ndt_classcomp company="fit-NTU -K22CNTT4" course="ReactJs"/>
    </div>
    </div>
  );
}

export default App;
