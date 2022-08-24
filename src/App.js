import './App.css';

import AddEmployee from './components/AddEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';
import AddReview from './components/AddReview';
import ProjectExampleById from './components/ProjectExampleById';
import ProjectProgress from './components/ProjectProgress';
import ProjectHistory from './components/ProjectHistory';
import ProjectHelp from './components/ProjectHelp';
import ProjectCodeFiles from './components/ProjectCodeFiles';
import LogIn from './components/LogIn';

import Register from './components/Register';

import UserProfile from './components/UserProfile';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <>
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route index element={<EmployeeList/>}/>
        <Route path='/' element={<EmployeeList/>}/>
        <Route path='/employeeList' element={<EmployeeList />}/>
        <Route path='/addreview' element={<AddReview />}/>
        <Route path='/ProjectExample/:id' element={<ProjectExampleById />}/>
        <Route path='/ProjectProgress/:id' element={<ProjectProgress />}/>
        <Route path='/ProjectHistory/:id' element={<ProjectHistory />}/>
        <Route path='/ProjectCode/:id' element={<ProjectCodeFiles />}/>
        <Route path='/ProjectHelp/:id' element={<ProjectHelp />}/>
        <Route path='/addEmployee' element={<AddEmployee/>}/>
        <Route path='/privacyPolicy' element={<PrivacyPolicy/>}/>

        <Route path='/logIn' element={<LogIn/>}/>
        <Route path='/regIn' element={<Register/>}/>
        
        <Route path='/userProfile' element={<UserProfile/>}/>
        
        <Route path="/editEmployee/:id" element={<UpdateEmployee />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
