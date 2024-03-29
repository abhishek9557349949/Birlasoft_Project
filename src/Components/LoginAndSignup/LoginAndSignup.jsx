import { useState } from 'react';
import './LoginAndSignup.css';
import { useNavigate } from 'react-router-dom';

const LoginAndSignup = () => {

    const [action, setAction] = useState("LOGIN");
    const [cnfPass, setCnfPass] = useState("");
    const [signupError, setSignupError] = useState("");
    const navigate = useNavigate();

    const [loginRequest, setLoginRequest] = useState({
        userId: '',
        password: ''
    });

    const handleCnfPassChange = (event) => {
        const newValue = event.target.value;
        setCnfPass(newValue);
      };

    const [signupRequest, setSignupRequest] = useState({
        clientName : '',
        mailId : '',
        businessName : '',
        role : '',
        userId : '',
        password : ''
    });
 
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://bsnodl-15122.birlasoft.com:9085/session/login', {
      method: 'POST',
      body: JSON.stringify(loginRequest),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result.response);
    if(result.response !== 'success'){
        console.log('result.response');
        alert(result.response);
    }else{
        if(result.role === 'BMS_OWNER')
            navigate('/owner-home');
        if(result.role === 'BMS_MANAGER')
            navigate('/mgr-home');
        if(result.role === 'BMS_ACCOUNTANT')
            navigate('/acc-home');
        if(response.role === 'BMS_EXICUTIVE')
            navigate('/exc-home')
    }
    };

    const handleSignupFormSubmit = async (event) => {
        event.preventDefault();
        console.log(JSON.stringify(signupRequest));
        console.log(cnfPass);
        if(cnfPass === signupRequest.password){
            const response = await fetch('http://bsnodl-15122.birlasoft.com:9085/session/signup', {
            method: 'POST',
            body: JSON.stringify(signupRequest),
            headers: {
                'Content-Type': 'application/json'
            }
            });
            const result = await response.json();
            console.log(result.response);
            setSignupError(result.response)
        }else{
            setSignupError("Your Password are not matching. Please Check.")
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginRequest((prevLoginRequest) => ({
            ...prevLoginRequest,
            [name]: value,
        }));
    };

    const handlesignupChange = (event) => {
        const { name, value } = event.target;
        setSignupRequest((prevSignupRequest) => ({
            ...prevSignupRequest,
            [name]: value,
        }));
    };

    return (<div className='loginScreen'>
    <div id="card">
<div id="card-content">
  <div id="card-title">
  <h3>Easyee Buisness</h3>
    <h2>{action}</h2>
    <div className="underline-title"></div>
  </div>
  {action === "LOGIN" ? 
  <form method="post" className="form" onSubmit={handleFormSubmit}>
    <label htmlFor='userId'>User ID:</label>
    <input id='userId' className="form-content" type="text" name="userId" value={loginRequest.userId} onChange={handleInputChange} required />        
    <div className="form-border"></div>
    <label htmlFor="password" >&nbsp;Password</label>
    <input id='password' className="form-content" type="password" name="password" value={loginRequest.password} onChange={handleInputChange} required />        
    <div className="form-border"></div>
    <span>
        <legend id="forgot-pass">Forgot password?</legend>
    </span>
    <input id="submit-btn" type="submit" name="login" value="LOGIN" />
    <span className='info' onClick={() => setAction("SignUp")}>Don't have account yet?</span>
  </form> : 
  <form method="post" className="form" onSubmit={handleSignupFormSubmit}>
  <label htmlFor="clientName">&nbsp;Full Name</label>
  <input id="clientName" className="form-content" type="text" name="clientName" autoComplete="on" value={signupRequest.clientName} onChange={handlesignupChange} required />
  <div className="form-border"></div>
  <label htmlFor="mailId" >&nbsp;Mail Id</label>
  <input id="mailId" className="form-content" type="email" name="mailId" value={signupRequest.mailId} onChange={handlesignupChange} required />
  <div className="form-border"></div>
  <label htmlFor="userId">&nbsp;User Id</label>
  <input id="userId" className="form-content" type="text" name="userId" autoComplete="on" value={signupRequest.userId} onChange={handlesignupChange} required />
  <div className="form-border"></div>
  <label htmlFor="businessName" >&nbsp;Buisness Name</label>
  <select className="form-content" name="businessName" id="businessName" value={signupRequest.businessName} onClick={handlesignupChange}>
    <option id='Buisness 1' name= 'Buisness 1' value="Buisness 1">Buisness 1</option>
    <option id='Buisness 2' name= 'Buisness 2' value="Buisness 2">Shoe Store</option>
    <option id='Buisness 3' name= 'Buisness 3' value="Buisness 3">Clothes Store</option>
    <option id='Buisness 4' name= 'Buisness 4' value="Buisness 4">Fashion Store</option>
</select>
  <div className="form-border"></div>
  <label htmlFor="user-buisness" >&nbsp;Role</label>
  <select className="form-content" name="role" id="role" value={signupRequest.role} onClick={handlesignupChange}>
    <option id='Manager' name= 'Manager' value="Manager">Manager</option>
    <option id='Accountant' name= 'Accountant' value="Accountant">Accountant</option>
    <option id='Employee' name= 'Employee' value="Employee">Employee</option>
</select>
  <div className="form-border"></div>
  <label htmlFor="user-password">&nbsp;Password</label>
  <input id="user-password" className="form-content" type="password" name="password" value={signupRequest.password} onChange={handlesignupChange} autoComplete="on" required />
  <div className="form-border"></div>
  <label htmlFor="user-cnfpass">&nbsp;Confirm Password</label>
  <input id="user-cnfpass" className="form-content" value={cnfPass} onChange={handleCnfPassChange} type="password" name="cnfpass" autoComplete="on" required />
  <div className="form-border"></div>
  <span>{signupError}</span>
  <input id="submit-btn" type="submit" name="submit" value="SignUp" />
  <span className='info' onClick={() => setAction("LOGIN")}>Click to login</span>
</form> 
}
</div>
</div>
 </div>
);
};

export default LoginAndSignup;
