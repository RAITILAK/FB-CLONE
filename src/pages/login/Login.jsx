import React from 'react'
import "./login.scss"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLog">
                FaceBook
            </h3>
            <span className="loginDesc">
                Connect with friends and the world around you on Facebook
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                
                <div className="Bottom">
                    <form className="bottomBox">
                        <input type="email" placeholder="Email" id="email" className="loginInput" 
                        required
                        />
                        <input type="password" placeholder="Password" id="password" className="loginInput" 
                        required
                        />
                        <button type="submit"className="loginButton">Sign In</button>
                        <Link to="/register"> <button className="loginLoginButton">Create New Account</button></Link>
                       
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
