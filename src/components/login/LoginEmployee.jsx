import React, { useState } from 'react'
import InputHandler from '../input-handler/InputHandler'
import LoginButton from '../reusables/LoginButton';

const LoginEmployee = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  return (
    <>
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h3 className='pb-10 pt-20 text-2xl font-bold uppercase'>Login</h3>
            <form className=' h-auto border rounded-lg border-grayBorder'>
                    <div className='px-5 pt-10 py-3'>
                        <label>Employee name</label>
                        <InputHandler
                            state = {username}
                            setState = {setUsername}
                            type ='text'
                            name = 'username'
                            placeholder = 'Employee name'
                        />
                    </div>
                    <div className='px-5'>
                        <label>Password</label>
                        <InputHandler
                            state = {password}
                            setState = {setPassword}
                            type ='password'
                            name = 'password'
                            placeholder = 'Password'
                        />
                    </div>
                    <div className='px-5 mt-10 mb-10'>
                        <LoginButton
                            type='Submit'
                            text = 'Login as Employee'
                            color='text-white'
                            bgColor= 'bg-primary'
                            onHoverColor = 'bg-primaryShade'
                        />
                    </div>
            </form>
        </div>
    </>
  )
}

export default LoginEmployee