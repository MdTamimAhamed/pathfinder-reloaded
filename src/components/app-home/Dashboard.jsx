import DashboardHeader from '../dashboard-index/DashboardHeader';
import SideBar from '../dashboard-index/SideBar';
import DashboardMain from '../dashboard-index/DashboardMain';

function Home() {
  return (
    <>
        <div className='app-body'>
          <DashboardHeader />
            <div className='flex justify-between'>
              <SideBar/>
              <DashboardMain />
            </div>  
        </div>
    </>
  );
}

export default Home;
