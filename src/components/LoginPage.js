import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./LoginPage.css"

function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    
    const navigate = useNavigate()
    const testAccount = {
        email: "testemail@gmail.com",
        password: "testpassword"
    }

    function attemptLogin(e) {
        e.preventDefault()

        if (email === testAccount.email && password === testAccount.password) {
            navigate("/home", { replace: true })
        } else {
            setError("The email or password is incorrect.")
        }
    }

    function displayErrorOnLoginFailure() {
        if (!error) {
            return null
        } else {
            return <p className="login-error">{error}</p>
        }
    }

    return (
        <div className="login-content">
            <div className="login-items">
                <img className="logo" src="./images/greendzine-logo.png" alt="Greendzine Technologies" />
                <h3 className="logo-text">We Are Electric</h3>
                    <form onSubmit={attemptLogin}>
                        <div className="fields-section">
                            <input
                                type="email"
                                className="login-field"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                className="login-field"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    { displayErrorOnLoginFailure() }
                    <input
                        type="submit"
                        className="login-button login-button-text"
                        value="Login"
                    />
                </form>
                <p className="forgot-password">Forgot Password?</p>
            </div>
        </div>
    )
}
