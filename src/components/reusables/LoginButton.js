const LoginButton = ({type, color, bgColor, onHoverColor}) => {
  return (
    <div className=''>
      <button
        type={type || 'submit'}
        className={`w-[350px] text-center rounded-md py-3 px-4 font-normal shadow-lg bg-configBlue 
        ${color} ${bgColor} hover:${onHoverColor}`}>
          Log in
      </button>
    </div>
  )
}

export default LoginButton;