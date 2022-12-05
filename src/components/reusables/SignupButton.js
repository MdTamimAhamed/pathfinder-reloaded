const SignupButton = ({type, color, bgColor, onHoverColor}) => {
  return (
    <div className=''>
      <button
        type={type || 'submit'}
        className={`w-[350px] text-center rounded-md py-3 px-4 font-normal shadow-sm
        ${color} ${bgColor} hover:${onHoverColor}`}>
          Sign up
      </button>
    </div>
  )
}

export default SignupButton