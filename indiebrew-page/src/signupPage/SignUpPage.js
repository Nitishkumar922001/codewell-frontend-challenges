import './SignUpPage.css';
import logo from '../Assets/Logo.svg'
import back from '../Assets/Back Arrow.svg'
function SignUpPage() {
    return (
        <div className="signup-container">
            <div className="signup-nav">
                <div className="company-log">
                    <img src={logo} alt='logo' />
                </div>

                <button className="back-btn" ><img src={back} /></button>

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
                        <input type='email' id='email' placeholder='john@example.com'></input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor='name'>Full Name</label>
                        <input type='text' id='name' placeholder='Jhon Doe'></input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor='email'>Password</label>
                        <input type='password' id='email' placeholder='At least 8 characters'></input>
                    </div>
                    <div className='input-group check-box'>
                        <input type='checkbox' id='terms-conditions' />
                        <label htmlFor='terms-conditions'>By creating an accounton lndieBrew. you agree to the <a className='term-condition-a'>Terms and conditions</a></label>

                    </div>
                    <button>Create an Account</button>
                </form>
            </div>
        </div>
    )
}
export default SignUpPage;