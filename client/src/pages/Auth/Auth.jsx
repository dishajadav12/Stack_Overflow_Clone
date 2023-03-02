import React,  {useState} from 'react'
import './Auth.css'
import icon from '../../assets/favicon-32x32.png'
import Aboutauth from './Aboutauth'
const Auth = () => {
    const [isSignup,setSignup]=useState(false)

    const handleSwitch = () =>{
        setSignup(!isSignup)

    }

    return (
        <section className='auth-selection'>
            {isSignup && <Aboutauth/>}
            <div className='auth-container'>
             
                        {! isSignup && <img src={icon} alt="stack overflow" className='login-logo'/>}
                <form>
                        {
                        isSignup && (
                            <label htmlFor='name'> <h4>Display Name</h4>
                            <input type="text" id='name' name='name'  /></label>
                        )
                        }
                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input type="emai" name="email" id="email" />
                    </label>
                    <label htmlFor="password">
                        <div style={{display:"flex", justifyContent:"space-between",}}>
                        <h4>Password</h4> 
                        { !isSignup &&  <p style={{fontSize:'13px',color:"#007ac6" }}>forgot password?</p>}
                        </div>
                        <input type="password" name="password" id="password" />
                        { isSignup && <p style={{color:"#666767", fontSize:'13px'}}> Passwors must contain at least eight <br/> characters, including at least 1<br/> letter and 1 number.</p> }
                    </label>
                        { isSignup && <label htmlFor='check'>
                        <input type="checkbox" id='check' />
                        <p style={{ fontSize:'13px'}}>Opt-in to recieve occasional <br /> product updates, user research invitation, <br /> company announcements and digests.</p></label>}
                    <button type='submit' className='auth-btn' > { isSignup ? 'Sign up' : 'Log in' }</button>
                </form>
                <p>     
                        {isSignup ? 'Already have an account?': "Don't have an account?"}
                <button type="button" className='handle-switch-btn' onClick={handleSwitch}> {isSignup ? "Log in" : "Sign up"}</button></p>
                        {isSignup && <p style={{color:"#666767", fontSize:'13px'}}>By clicking “Sign up”, you agree to our 
                            <span style={{color:"#007ac6"}}> terms of <br /> service </span>, 
                            <span style={{color:"#007ac6"}}> privacy policy </span> and 
                            <span style={{color:"#007ac6"}}> cookie policy.</span></p>}
            </div>

        </section>
        )
}

export default Auth