import ButtonWithIcon from "../reusables/ButtonWithIcon"
const DashboardMain = ({title}) => {
  return (
    <div className="w-full ml-4 mt-2">
        <h3 className="border-b border-grayFill mr-5 mt-2 py-2 pl-4  text-[18px] font-[Roboto] font-bold text-darker uppercase">
          Dashboard
        </h3>
          <ButtonWithIcon 
            icon='fa-solid fa-plus'
            type='button' 
            color='text-white' 
            bgColor='bg-primary' 
            onClick='' 
            onHoverColor = 'bg-primaryShade'
            children='Add New'
            />       
    </div>
  )
}

export default DashboardMain;