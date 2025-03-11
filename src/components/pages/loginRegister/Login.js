import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './LoginRegister.css';

const Login = () => {

  const navigate = useNavigate();

  useEffect( () => {
    if(localStorage.getItem('token')){
      navigate('/');
    }
  }, [navigate])

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);



  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);    
    fetch(
      'https://frontend.internetskimarketing.eu/backend/wp-json/jwt-auth/v1/token',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      }
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setForm({
        username: "",
        password: ""
      });
      if(data?.code) {
        setError("Neispravni podaci, pokušajte ponovo");
        return;
      }      
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.user_display_name);
      navigate('/');
      window.location.reload();
    });
  }

  return (

    <div className="page-container">
      <main className="page-main">
        <div className="page-content">
          <div className="main-content">
            <div className="login-card">
              <div className="login-card-header">

                        
                  <p>@rrow </p>
                  
                  <div>
                    <h1>Welcome to WeBook!</h1>
                    <p>You can log in here if you already have our account. If not, please sign up.</p>
                  </div>

                  <p>
                  <img alt="@rrow" src="images/GreenArrowLogin100x150.jpg" />
                  </p>
                
                  <div>
                    <form className={isLoading ? "loading" : ""}  onSubmit={handleLogin} > 
                      <p><label>E-mail or phone number</label></p>
                      <input type="text" name="username" size="40" value={form.username} onChange={handleChange}  required />

                      <p><label>Password</label></p>
                      <input type="password" name="password" size="30" value={form.password} onChange={handleChange} required />
                      <p>
                        <Link to="/">Forgot Password?</Link>
                      </p>
                      
                      { error ? <p className="alert alert-danger">{error}</p> : ""  }

                      <p>
                      <button type="submit">Log In</button>
                      </p>

                      <p className="sign-up">Don’t have an account? <Link to="register.html">Sign Up</Link></p>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}

export default Login;