function Header(){
    return (
        <div className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="logo">
                        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Maninder Dev" width="80" height="80" />
                    </div>
                    <div className="navbar">
                        <ul className="main-menu">
                            <li className="menu-item">
                                <a href="#" className="link">Home</a>
                            </li>
                            <li>
                                <a href="#" className="link">Projects</a>
                            </li>
                            <li>
                                <a href="#" className="link">Experience</a>
                            </li>
                            <li>
                                <a href="#" className="link">Contact</a>
                            </li>
                        </ul>
                        <button className="mobile-toggle" id="menu-toggle">
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