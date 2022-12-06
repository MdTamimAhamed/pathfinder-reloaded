import React from 'react'
import LoginButton from '../reusables/LoginButton'
import SignupButton from '../reusables/SignupButton'
import Logo from '../../images/pathfinder.png'
import { Link } from 'react-router-dom'

const LoginOrSignup = () => {
  return (
    <>
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='mb-30'>
                <img className='w-60 h-20' src={Logo} alt='' />
            </div>
            <h3 className='pb-10 pt-20'>Welcome! Let's get started.</h3>
            <div className='h-60 border flex flex-col justify-center items-center px-10 rounded-lg border-grayBorder'>
                <div className=''>
                    <Link to='/login-option'>
                        <LoginButton
                        type='Submit'
                        text = 'Login'
                        color='text-darker'
                        bgColor= 'bg-grayFill'
                        onHoverColor = 'bg-primary'
                        />
                    </Link>
                </div>
                <div className='pt-5'>
                    <Link to='/signup-option'>
                        <SignupButton
                        type='Submit'
                        text = 'Sign up'
                        color='text-darker'
                        bgColor= 'bg-grayFill'
                        onHoverColor = 'primary'
                         />
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginOrSignup