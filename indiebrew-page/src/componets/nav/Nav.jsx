import Logo from '../../Assets/Logo.svg';
import menuBtn from '../../Assets/Hamburger Menu.svg';
import back from '../../Assets/Back Arrow.svg';
import './Nav.css';
import { useState } from 'react';
function Nav() {
    const [toggel, setToggel] = useState(0)
    function toggelMenu() {
        setToggel(!toggel);
    }
    return (
        <>
            <nav className="nav-bar">
                <div className="logo">
                    <img src=
                        {Logo} alt="logo" />
                </div>

                <div className='nav-links'>


                    <div className={toggel ? "navlink" : 'd-none'}>
                        <ul>

                            <li>Pricing</li>
                            <li>Support</li>
                            <li className='btn-primary btn-mobile'> Get Started- <span>it's free</span></li>

                        </ul>
                    </div>
                    <div className='nav-btn' onClick={toggelMenu}>
                        <img src={toggel ? back : menuBtn} alt='toggle-btn' />
                    </div>
                </div>


            </nav>
        </>
    )
}
export default Nav;