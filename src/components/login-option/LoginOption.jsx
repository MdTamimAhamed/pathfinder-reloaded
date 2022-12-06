import React from 'react'
import { Link } from 'react-router-dom'
import LoginButton from '../reusables/LoginButton'
import Logo from '../../images/pathfinder.png'

const LoginOption = () => {
  return (
    <>
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='mb-30'>
                <img className='w-60 h-20' src={Logo} alt='' />
            </div>
            <h3 className='pb-10 pt-20'><i className="fa-solid fa-right-to-bracket text-primary pr-2"></i> Login Options:</h3>
            <div className='h-60 border flex flex-col justify-center items-center px-10 rounded-lg border-grayBorder'>
                <div className=''>
                    <Link to='/login-individual'>
                        <LoginButton
                        type='Submit'
                        text = 'Login as an Individual'
                        color='text-darker'
                        bgColor= 'bg-grayFill'
                        onHoverColor = 'bg-primary'
                        />
                    </Link>
                </div>
                <div className='pt-5'>
                <Link to='/login-employee'>
                        <LoginButton
                        type='Submit'
                        text = 'Login as Employee'
                        color='text-darker'
                        bgColor= 'bg-grayFill'
                        onHoverColor = 'bg-primary'
                        />
                    </Link>
                </div>
                <div className='pt-5'>
                <Link to='/login-manager'>
                        <LoginButton
                        type='Submit'
                        text = 'Login as Manager'
                        color='text-darker'
                        bgColor= 'bg-grayFill'
                        onHoverColor = 'bg-primary'
                        />
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginOption