import React from 'react'
import DashboardHeader from '../dashboard-index/DashboardHeader';
import SideBar from '../dashboard-index/SideBar';

const CompanyProfile = () => {
  return (
    <>
      <div className='app-body'>
          <DashboardHeader />
            <div className='flex justify-between'>
              <SideBar/>
              <div className="w-full ml-4 mt-2">
                <h4 className="border-b border-secondary mr-5 mt-2 py-2 pl-4  text-[18px] font-[Roboto] font-bold text-darker uppercase">
                    Company Profile
                </h4>
              </div>
            </div>  
        </div>
    </>
  )
}

export default CompanyProfile