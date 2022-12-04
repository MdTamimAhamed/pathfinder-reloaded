import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import DashboardHeader from './components/dashboard-index/DashboardHeader';
import SideBar from './components/dashboard-index/SideBar';
import DashboardMain from './components/dashboard-index/DashboardMain';
import AddButton from './utility-component/AddButton';

function App() {
  return (
    <>
        <div className='app-body'>
          <Router>
              <DashboardHeader />
              <div className='flex'>
                <SideBar />
                <DashboardMain>
                  <AddButton btnName = 'Add New' />
                </DashboardMain>
              </div>  
          </Router>
        </div>
    </>
  );
}

export default App;
