import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import DashboardHeader from './components/dashboard-index/DashboardHeader';
import SideBar from './components/dashboard-index/SideBar';
import DashboardMain from './components/dashboard-index/DashboardMain';
import { useState } from 'react';

function App() {
  const[title, setTitle] = useState('');
  return (
    <>
        <div className='app-body'>
          <Router>
              <DashboardHeader />
              <div className='flex justify-between'>
                <SideBar setTitle = {setTitle}/>
                <DashboardMain title = {title}/>
              </div>  
          </Router>
        </div>
    </>
  );
}

export default App;
