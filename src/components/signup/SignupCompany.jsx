import React, { useState } from 'react'
import InputHandler from '../input-handler/InputHandler'
import SignupButton from '../reusables/SignupButton'

const SignupCompany = () => {
    const[name,setName] = useState('');
    const[address,setAddress] = useState('');
    const[password, setPassword] =  useState('');
  return (
    <>
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h3 className='pb-2 pt-20 text-2xl font-bold'>Sign up as Company (Manager)</h3>
            <form className='w-[850px] flex justify-between h-auto border-t border-t-grayBorder pt-20'>
                    {/* manager section */}
                    <div className='w-[400px] border border-grayBorder rounded-md relative'>
                        <h3 className='py-2 px-4 rounded-md text-xl font-bold bg-white absolute -top-5 left-[50%] translate-x-[-50%]'>
                            Manager Info
                        </h3>
                        <div className='px-5 pt-10 py-3'>
                            <label>Manager name</label>
                            <InputHandler
                                state = {name}
                                setState = {setName}
                                type ='text'
                                name = 'username'
                                placeholder = 'Manager name'
                            />
                        </div>
                        <div className='px-5 py-3'>
                            <label>Address</label>
                            <InputHandler
                                state = {address}
                                setState = {setAddress}
                                type ='text'
                                name = 'profession'
                                placeholder = 'Address'
                            />
                        </div>
                        <div className='px-5 pb-10'>
                            <label>Password</label>
                            <InputHandler
                                state = {password}
                                setState = {setPassword}
                                type ='password'
                                name = 'password'
                                placeholder = 'Password'
                            />
                        </div>
                    </div>
                    {/* company section */}
                    <div className='w-[400px] border border-grayBorder rounded-md relative'>
                        <h3 className='py-2 px-4 rounded-md text-xl font-bold bg-white absolute -top-5 left-[50%] translate-x-[-50%]'>
                            Company Info
                        </h3>
                        <div className=' px-5 pt-10 py-3'>
                            <label>Company name</label>
                            <InputHandler
                                state = {name}
                                setState = {setName}
                                type ='text'
                                name = 'username'
                                placeholder = 'Company name'
                            />
                        </div>
                        <div className='px-5 py-3'>
                            <label>Address</label>
                            <InputHandler
                                state = {address}
                                setState = {setAddress}
                                type ='text'
                                name = 'profession'
                                placeholder = 'Address'
                            />
                        </div>
                    </div>
            </form>
            <div className='px-5 mt-10 mb-10'>
                <SignupButton
                    type='Submit'
                    text = 'Sign up as Company'
                    color='text-white'
                    bgColor= 'bg-primary'
                    onHoverColor = 'bg-primaryShade'
                />
            </div>
        </div>
    </>
  )
}

export default SignupCompany