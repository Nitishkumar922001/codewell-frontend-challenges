import Logo from '../../Assets/Logo.svg';
import  './Nav.css';
function Nav()
{
    return(
        <>
        <nav className="nav-bar">
        <div className="logo">
        <img src=
        {Logo} alt="logo"/>
        </div>
        <div className='nav-links'>
            <ul>
                <li>Pricing</li>
                <li>Support</li>
                <li className='btn-primary'> Get Started- <span>it's free</span></li>
            </ul>
        </div>
        </nav>
        </>
    )
}
export default Nav;