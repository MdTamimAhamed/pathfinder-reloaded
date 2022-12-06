import React from 'react'
import { Link } from 'react-router-dom'
import SignupButton from '../reusables/SignupButton'
import Logo from '../../images/pathfinder.png'

const SignupOption = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='mb-30'>
                <img className='w-60 h-20' src={Logo} alt='' />
            </div>
            <h3 className='pb-10 pt-20'><i class="fa-solid fa-user-plus text-primary pr-2"></i> Sign up Options:</h3>
            <div className='h-60 border flex flex-col justify-center items-center px-10 rounded-lg border-grayBorder'>
                <div className=''>
                    <Link to='/signup-individual'>
                        <SignupButton
                        type='Submit'
                        text = 'Sign up as an Individual'
                        color='text-darker'
                        bgColor= 'bg-grayFill'
                        onHoverColor = 'primary'
                        />
                    </Link>
                </div>
                <div className='pt-5'>
                <Link to='/signup-company'>
                        <SignupButton
                        type='Submit'
                        text = 'Sign up as Company'
                        color='text-darker'
                        bgColor= 'bg-grayFill'
                        onHoverColor = 'primary'
                        />
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default SignupOption