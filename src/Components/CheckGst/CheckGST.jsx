import React, { useState, useEffect } from 'react';
import './checkGST.css';
import { Link, Navigate } from 'react-router-dom';
import logo from '../Resources/logo.png';

const CheckGst = () => {

    return (
        
<div className='body'>
<header>
        <div>
            <img className="logo" src= {logo} alt="GST Icon"/></div>
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
    <section class="check-gst">
        <div class="gst-header">
            <h1>Check GST</h1>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Customer Name</th>
                    <th>Amount</th>
                    <th>GST Percentage</th>
                    <th>Total Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>123</td>
                    <td>John Doe</td>
                    <td>$500.00</td>
                    <td>18%</td>
                    <td>$590.00</td>
                </tr>
                <tr>
                    <td>456</td>
                    <td>Jane Smith</td>
                    <td>$800.00</td>
                    <td>12%</td>
                    <td>$896.00</td>
                </tr>
                <tr>
                    <td>593</td>
                    <td>Mike Jhonson</td>
                    <td>$800.00</td>
                    <td>12%</td>
                    <td>$8996.00</td>
                </tr>
            </tbody>
        </table>
        <div class="additional-info">
            <p>For detailed GST reports and analytics, explore our premium features.</p>
            <Link to="/owner-home"><button>Back</button></Link>
        </div>
    </section>
</div>
    );
};

export default CheckGst;