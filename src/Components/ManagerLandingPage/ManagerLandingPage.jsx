import './ManagerLandingPage.css';
import { Link } from 'react-router-dom';
import logo from '../Resources/logo.png';
import ftr1 from '../Resources/edit.png';
import ftr2 from '../Resources/rupee.png';
import ftr3 from '../Resources/checklist.png';

const ManagerLandingPage = () => {
    return(
        <div>
        <header>
        <div className="logo"><img src={logo} className='logo' alt="logo" /></div>
        <nav>
            <ul>
                <li>Generate Bill</li>
                <li><Link to="/manage-bills">Manage Bill</Link></li>
                <li><Link to="/Check_Inventory">Manage Inventory</Link></li>
                <li classNameName="dropdown">
                    <span className="dropbtn">Hi Manager</span>
                    <div className="dropdown-content">
                        <span>Profile</span>
                        <span><Link to="/">Logout</Link></span>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
    <section className="landing">
        <div className="landing-content">
            <h1>Welcome to Your Business Management System</h1>
            <p>Empower your business with our advanced Business Management System. From generating bills to overseeing your inventory, our platform adapts to your role—be it a manager, executive, or employee.</p>
            <span className="cta-button"><Link to="/explore-features">Explore Features</Link></span>
        </div>
    </section>
    <section className="features">
        <div className="feature">
        <img src={ftr1} className='logo' alt="logo" />
            <h2>Generate Bills Effortlessly</h2>
            <p>Streamline your billing process with our intuitive tools. Create and send invoices in a few clicks.</p>
        </div>
        <div className="feature">
        <img src={ftr3} className='logo' alt="logo" />
            <h2>Manage Inventory Seamlessly</h2>
            <p>Track your inventory in real-time. Receive alerts and optimize stock levels effortlessly.</p>
        </div>
        <div className="feature">
            <img src={ftr2} className='logo' alt="logo" />
            <h2>Check GST Compliance</h2>
            <p>Ensure GST compliance with our automated tools. Stay updated and avoid compliance issues.</p>
        </div>
    </section>
    </div>
    );
};
export default ManagerLandingPage;