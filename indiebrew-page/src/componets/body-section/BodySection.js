import './BodySection.css'
import PhoneMockup from '../../Assets/Phone Mockup.png';
import socialMedia from '../../Assets/Social Media Icons.png';
function BodySection() {

    return (<div className="body-container" >
        <div className="body-card">
        <div className="body-left">
            <p className="title2">Curate your feed from dozens of ressources.</p>
            <p className="body-info">We cover all major platforms where one could want to curate their feed from Reddit, ProductHunt,IndieHackers,and so much more.</p>
            <a>See full list of ressources</a>
        </div>
        
        <div className="body-right">
            <img src={socialMedia}></img>
        </div>
        </div>
        <div className="body-card">
        <div className="body-right">
            <img src={PhoneMockup}></img>
        </div>
        <div className="body-left">
            <p className="title2">Access your feed from the comfort of your phone.</p>
            <p className="body-info">With native apps for both ios and Android, accessing your curated content has never been easier</p>
            <a>Sign up for the waitisit</a>
        </div>
        
       
        </div>
    </div>)
}
export default BodySection;