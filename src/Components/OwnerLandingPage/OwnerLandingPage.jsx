import './OwnerLandingPage.css';
import { Link } from 'react-router-dom';
import logo from '../Resources/logo.png';
import ftr1 from '../Resources/edit.png';
import ftr2 from '../Resources/rupee.png';
import ftr3 from '../Resources/checklist.png';

const OwnerLandingPage = () => {
    return(
        <div>
        <header>
        <div className="logo"><img src={logo} className='logo' alt="logo" /></div>
        <nav>
            <ul>
                <li><Link to="/Manage_Business">Manage Business</Link></li>
                <li><Link to="/Check_Inventory">Manage Inventory</Link></li>
                <li><Link to="/manage-bills">Manage Bill</Link></li>
                <li><Link to="/gst">Check GST</Link></li>
                <li><Link to="/generate-bill">Generate Bill</Link></li>
                <li className="dropdown">
                    <span className="dropbtn">Hi Chinki</span>
                    <div className="dropdown-content">
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
            <img src={ftr1} className='img' alt="logo" />
            <h2>Generate Bills Effortlessly</h2>
            <p>Streamline your billing process with our intuitive tools. Create invoices easily.This innovative system automates the traditionally complex task of creating bills. With user-friendly interfaces and advanced automation features, users can input relevant data and swiftly generate accurate and professional bills. This solution is especially beneficial for businesses looking to enhance productivity, minimize errors, and create a more streamlined invoicing process.</p>
        </div>
        <div className="feature">
            <img src={ftr3} className='img' alt="logo" />
            <h2>Manage Inventory Seamlessly</h2>
            <p>Track your inventory in real-time. Receive alerts and optimize stock levels effortlessly.</p>
        </div>
        <div className="feature">
            <img src={ftr2} className='img' alt="logo" />
            <h2>Check GST Compliance</h2>
            <p>Ensure GST compliance with our automated tools. Stay updated and avoid compliance issues. This is the great tool for managing gst of all the bills.</p>
        </div>
    </section>
    </div>
    );
};
export default OwnerLandingPage;