import { Link } from 'react-router-dom';
import './ExploreFeatures.css';
import logo from '../Resources/logo.png'
import ftr1 from '../Resources/edit.png';
import ftr2 from '../Resources/rupee.png';
import ftr3 from '../Resources/checklist.png';

const ExploreFeatures = () => {

    return(
        <div>
            <header>
        <div class="logo"><img src={logo} className='logo' alt="logo" /></div>
        <nav>
            <ul>
                <li><Link to="/owner-home">Back</Link></li>
                <li class="dropdown">
                    <span class="dropbtn">Hi Chinki</span>
                    <div class="dropdown-content">
                        <Link to="/">Logout</Link>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
    <section class="explore-features">
        <div class="feature">
        <img src={ftr1} className='logo' alt="logo" />
            <h2>Generate Bills</h2>
            <p>Create professional invoices and bills effortlessly. Customize templates and manage billing efficiently.</p>
        </div>
        <div class="feature">
        <img src={ftr3} className='logo' alt="logo" />
            <h2>Manage Inventory</h2>
            <p>Track and control your inventory in real-time. Receive alerts, view stock levels, and optimize your supply chain.</p>
        </div>
        <div class="feature">
        <img src={ftr2} className='logo' alt="logo" />
            <h2>Check GST Compliance</h2>
            <p>Ensure seamless GST compliance. Our automated tools keep you updated and help you avoid compliance issues.</p>
        </div>
        <div class="feature">
        <img src={ftr2} className='logo' alt="logo" />
            <h2>Powerful Analytics Dashboard</h2>
            <p>Gain insights into your business performance with our analytics dashboard. Visualize data and make informed decisions.</p>
        </div>
        <div class="feature">
        <img src={ftr1} className='logo' alt="logo" />
            <h2>Task Management</h2>
            <p>Enhance productivity with our task management tools. Assign tasks, set deadlines, and track progress seamlessly.</p>
        </div>
        <div class="feature">
        <img src={ftr3} className='logo' alt="logo" />
            <h2>User Permissions</h2>
            <p>Customize access levels with granular user permissions. Control who can view, edit, and manage specific features.</p>
        </div>
    </section>
        </div>
    );
};
export default ExploreFeatures;