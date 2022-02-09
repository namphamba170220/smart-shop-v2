import React, { useState } from 'react'
import Helmet from '../../component/Helmet/Helmet'

function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <Helmet title='Login'>
        <div className='login'>
            <div className='header__login'>
                <form className='form'>
                    <div className='form__group'>
                        <input type="email" 
                        placeholder='Enter your email...' 
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className='form__group control__password'>
                        <input 
                        type = "password"
                        placeholder='Enter your password...'
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        </div>
    </Helmet>
    
  )
}

export default Login