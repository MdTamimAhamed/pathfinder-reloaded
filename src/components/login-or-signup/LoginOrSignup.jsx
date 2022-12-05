import React from 'react'
import LoginButton from '../reusables/LoginButton'
import SignupButton from '../reusables/SignupButton'

const LoginOrSignup = () => {
  return (
    <>
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='border px-10 py-15'>
                <div className=''><LoginButton
                    type='Submit'
                    color='text-white'
                    bgColor= 'bg-primary'
                    onHoverColor = 'bg-primaryShade'
                /></div>
                <div className='pt-5'><SignupButton
                    type='Submit'
                    color='text-white'
                    bgColor= 'bg-primary'
                    onHoverColor = 'bg-primaryShade'
                /></div>
            </div>
        </div>
    </>
  )
}

export default LoginOrSignup