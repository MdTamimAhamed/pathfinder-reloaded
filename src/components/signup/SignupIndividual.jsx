import React, { useState } from 'react'
import InputHandler from '../input-handler/InputHandler'
import SignupButton from '../reusables/SignupButton';

const SignupIndividual = () => {
  const[name,setName] = useState('');
  const[profession,setProfession] = useState('');
  const[password, setPassword] =  useState('');
  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h3 className='pb-10 pt-20 text-2xl font-bold uppercase'>Sign up</h3>
            <form className=' h-auto border rounded-lg border-grayBorder'>
                    <div className='px-5 pt-10 py-3'>
                        <label>User name</label>
                        <InputHandler
                            state = {name}
                            setState = {setName}
                            type ='text'
                            name = 'username'
                            placeholder = 'User name'
                        />
                    </div>
                    <div className='px-5 py-3'>
                        <label>Profession</label>
                        <InputHandler
                            state = {profession}
                            setState = {setProfession}
                            type ='text'
                            name = 'profession'
                            placeholder = 'Profession'
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
                        <SignupButton
                            type='Submit'
                            text = 'Sign up as Individual'
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

export default SignupIndividual