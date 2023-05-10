import './Footer.css'
function Footer() {
    return (<div className='footer-div'>
        <div className='company-div'>
            <p className='company-name'>lndieBrew</p>
            <p className='company-info'>
                with indieBrew,get personal feeds from resources all around the web,including Reddit,HackerNews,and much more.
            </p>
            <p>Made with ❤  in the Uk</p>
        </div>
        <ul>
            <li>Sitemap</li>
            <li>Homepage</li>
            <li>Pricing</li>
        </ul>
        <ul>
            <li>Resources</li>
            <li>Support</li>
            <li>Contact</li>
            <li>FAQ</li>
        </ul>
        <ul>
            <li>Company</li>
            <li>About</li>
            <li>Customers</li>
            <li>Blog</li>
        </ul>
        <ul>
            <li>Protfolios</li>
            <li>HackerNews</li>
            <li>Reddit</li>
            <li>Twitter</li>
        </ul>
    </div>)
}
export default Footer;