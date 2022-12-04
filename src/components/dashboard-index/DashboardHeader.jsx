import Image from '../../images/profile.jpeg';
const DashboardHeader = () => {
  return (
    <div className="bg-secondary">
        <div className="min-[320px]:flex justify-between items-center max-w-[1920px]  mx-auto px-20">
          <div className=" [&>*]:text-primary py-4">
              <h3 className='font-bold text-2xl'>Pathfinder</h3>
              <h3 className="text-base tracking-[.5rem]">Reloaded</h3>
          </div>

          <div className="profile">
            <img className='w-10 h-10 rounded-full border-2 border-darker'src={Image} alt='profile'/>
          </div>
        </div>
    </div>
  )
}

export default DashboardHeader;