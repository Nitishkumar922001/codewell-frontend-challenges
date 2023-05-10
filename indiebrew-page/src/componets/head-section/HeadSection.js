import './HeadSection.css';
import socialMedia from '../../Assets/User Avatars.svg';
import FeddMockup from '../../Assets/Feed Mockup.png';
import { useNavigate } from 'react-router';
function HeadSection() {
    const navigate=useNavigate();
    return (<div className='head-card'>
        <div className='head-left'>
            <h1 className='title'>Your weekly personal feed digest</h1>
            <p className='head-info'>With lndieBrew, get personal feeds from resources all around the web. including Reggit, HackerNews lndieHackers, and mush more.</p>
            <button className='btn-primary' onClick={()=>navigate('./signuppage')}> Get Started- <span>it's free</span></button>
            <div className="social-media">
                <img src={socialMedia} />
                <p>Join <span>32,642</span> lndieBrewers in curating their personal digest.</p>
            </div>
        </div>
        <div className="head-right">
            <img src={FeddMockup} />
        </div>
    </div>)
}
export default HeadSection;