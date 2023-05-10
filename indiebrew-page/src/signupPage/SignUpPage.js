import './SignUpPage.css';
import logo from '../Assets/Logo.svg'
import back from '../Assets/Back Arrow.svg'
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { validate } from './validate';
function SignUpPage() {
const Data=useRef();
const [error,setError]=useState({})
function onChangeHandler(event)
{
   
    if(event.target.id==='termsConditions')
    {
        Data[event.target.id]=event.target.checked; 
    }
    else
    Data[event.target.id]=event.target.value;
}
function sumbitHandler(event)
{ event.preventDefault();
    console.log(Data)
    const err=validate(Data);
    setError({...err});
    console.log(err);

}
    const navigate=useNavigate();
    return (
        <div className="signup-container">
            <div className="signup-nav">
                <div className="company-log">
                    <img src={logo} alt='logo' />
                </div>

                <button className="back-btn" onClick={()=>navigate('/')} ><img src={back} /></button>

            </div>
            <div className='signup-card'>
                <div className='left-part'>
                    <h1 className='Signup-title'>Create your personalized feed.</h1>
                    <p><span className='emoji'>🎈</span><span className='bold'>Over 20 resources. </span>With resources ranging from Reddit to lndieHackers,we've got all your needs covered</p>
                    <p><span className='emoji'>🗞</span><span className='bold'>Delivered weekly. </span>
                        Every week at exactly Tuesday 12.00 P.M. EST - expectg a value- needs covered.
                    </p>

                    <p><span className='emoji'>💡</span><span className='bold'>unlimited ideas. </span>
                        with all the ideas you'll be reading about,what's stopping you from creating a sustainable startup?
                    </p>
                </div>
                <form className="right-part">
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' placeholder='john@example.com' onChange={onChangeHandler}></input>
                        <p className='error-msg'>{error.email}</p>
                    </div>
                    <div className='input-group'>
                        <label htmlFor='name'>Full Name</label>
                        <input type='text' id='name' placeholder='Jhon Doe' onChange={onChangeHandler}/>
                        <p className='error-msg'>{error.name}</p>
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' placeholder='At least 8 characters' onChange={onChangeHandler}/>
                        <p className='error-msg'>{error.password}</p>
                    </div>
                    <div className='input-group check-box'>
                        <input type='checkbox' id='termsConditions' onChange={onChangeHandler} />
                        <label htmlFor='termsConditions'>By creating an accounton lndieBrew. you agree to the <a className='term-condition-a'href='/'>Terms and conditions</a></label>
                        <p className='error-msg'>{error.termsConditions}</p>
                    </div>
                    <button onClick={sumbitHandler}>Create an Account</button>
                </form>
            </div>
        </div>
    )
}
export default SignUpPage;