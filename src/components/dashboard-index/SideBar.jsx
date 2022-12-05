import { Link } from "react-router-dom"

const SideBar = () => {
const navNames = [
    {id:1,title: 'Dashboard', path: '/',icon:'fa-solid fa-gauge'},
    {id:2,title: 'Score', path: '/score', icon:'fa-solid fa-star '},
    {id:3,title: 'Journal',path: '/journal', icon:'fa-solid fa-book '},
    {id:4,title: 'Employee', path: '/employees', icon:'fa-solid fa-user-group '},
    {id:5,title: 'Company Profile', path: '/company-profile', icon:'fa-solid fa-building '},
    {id:6,title: 'Personal Profile', path: '/personal-profile', icon:'fa-solid fa-user '}
]

  return (
    <div className="sidebar w-[270px] h-screen mt-4 bg-secondary pt-2 px-2 ml-5 rounded-xl">
        <ul className="[&>li]:py-4 ">
            {
                navNames.map((item) =>(
                    <li key={item.id} 
                        className="group rounded-lg pl-6 font-sm hover:bg-primary hover:text-white ease-in duration-100 cursor-pointer">
                        <i className={`${item.icon} pr-4 text-md text-primary group-hover:text-white ease-in duration-100 cursor-pointer`}></i>
                        <Link to={`${item.path}`} >{item.title}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default SideBar