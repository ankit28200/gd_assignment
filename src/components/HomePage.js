import React from "react"

import BottomNavBar from "./BottomNavBar"

import "./HomePage.css"

function HomePage() {
    return (
        <div className="home-content">
            <img className="employee-call" src="./images/caller-icon.png" alt="User Call" />
            <div className="notifs-section">
                <img className="notif-moptro" src="./images/moptro-logo.png" alt="MOPTro Notifications" />
                <div className="notif-badge">
                    <div className="notif-bg"></div>
                    <p className="notif-number">4</p>
                </div>
            </div>
            <div className="dashboard-label">
                Employee Productivity Dashboard
            </div>
            <div className="dashboard-details">
                <div className="dashboard-bg"></div>
                <div className="productivity-area">
                    <div className="productivity-section">
                        <div className="prod-text-row">
                            <p>Productivity on Monday</p>
                            <p className="prod-text-value">4%</p>
                        </div>
                        <div className="productivity-bar monday" />
                    </div>
                    <div className="productivity-section">
                        <div className="prod-text-row">
                            <p>Productivity on Tuesday</p>
                            <p className="prod-text-value">92%</p>
                        </div>
                        <div className="productivity-bar tuesday" />
                    </div>
                    <div className="productivity-section">
                        <div className="prod-text-row">
                            <p>Productivity on Wednesday</p>
                            <p className="prod-text-value">122%</p>
                        </div>
                        <div className="productivity-bar wednesday" />
                    </div>
                    <div className="productivity-section">
                        <div className="prod-text-row">
                            <p>Productivity on Thursday</p>
                            <p className="prod-text-value">93%</p>
                        </div>
                        <div className="productivity-bar thursday" />
                    </div>
                    <div className="productivity-section">
                        <div className="prod-text-row">
                            <p>Productivity on Friday</p>
                            <p className="prod-text-value">89%</p>
                        </div>
                        <div className="productivity-bar friday" />
                    </div>
                    <div className="productivity-section">
                        <div className="prod-text-row">
                            <p>Productivity on Saturday</p>
                            <p className="prod-text-value">98%</p>
                        </div>
                        <div className="productivity-bar saturday" />
                    </div>
                </div>
            </div>
            <BottomNavBar />   
        </div>
    )
}

export default HomePage