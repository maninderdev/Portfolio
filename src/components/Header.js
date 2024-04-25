function Header(){
    const handleMenuToggle = () => {
        var btnToggle = document.getElementById('menu-toggle').closest('.navbar');
        if(btnToggle.classList.contains('sm-active')){
            btnToggle.classList.remove('sm-active');
        }else{
            btnToggle.classList.add('sm-active');
        }
    };
    const handleThrou = e => {
        var dataTo = e.target.getAttribute('data-to');
        document.getElementById(dataTo).scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <div className="header" id="header">
            <div className="container">
                <div className="header-inner">
                    <div className="logo">
                        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Maninder Dev" width="80" height="80" />
                    </div>
                    <div className="navbar">
                        <ul className="main-menu">
                            <li className="menu-item">
                                <span className="link" onClick={handleThrou} data-to="header">Home</span>
                            </li>
                            <li>
                                <span className="link" onClick={handleThrou} data-to="projects">Projects</span>
                            </li>
                            <li>
                                <span className="link" onClick={handleThrou} data-to="experience">Experience</span>
                            </li>
                            <li>
                                <span className="link" onClick={handleThrou} data-to="contact">Contact</span>
                            </li>
                        </ul>
                        <button className="mobile-toggle" id="menu-toggle" onClick={() => {handleMenuToggle()}}>
                            <span className="bar bar-1"></span>
                            <span className="bar bar-2"></span>
                            <span className="bar bar-3"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;