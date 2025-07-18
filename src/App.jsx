import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import Forget from './Components/Forget';
import Otp from './Components/Otp';
import Set from './Components/Set';
import Signup from './Components/Signup';
import Resetconf from './Components/Resetconf';
import Dashboard from './Components/Dashboard';
import Accounts from './Components/Accounts';
import CreateAcct from './Components/CreateAcct';
import Personalinfo from './Components/Personalinfo';
import Editdetails from './Components/Editdetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/forget" element={<Forget />} />
        <Route path='/otp' element={<Otp />} />
        <Route path= '/set' element = {<Set/>} />
        <Route path= '/signup' element = {<Signup/>} />
        <Route path='/resetconf' element = {<Resetconf/>} />
        <Route path='/dashboard' element = {<Dashboard/>} />
        <Route path='/accounts' element = {<Accounts/>} />
        <Route path='/createacct' element = {<CreateAcct/>}/>
       <Route path='/personalinfo' element = {<Personalinfo/>}/>
       <Route path='/editdetails' element = {<Editdetails/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
