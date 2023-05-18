import React from "react";
import "@/style/Settings.scss";

function Settings() {

    return(
        <div className="settings-container">
            <div className="settings-header">
                <span className="settings-title">Einstellungen</span>
            </div>
            <div className="settings-content">
                <div className="settings-content-container">
                    <div className="settings-navigation">
                        <div className="settings-nav-item">
                            <span>Allgemein</span>
                        </div>
                        <div className="settings-nav-item">
                            <span>Profil</span>
                        </div>
                    </div>
                    <div className="settings-sections">
                        <div className="settings-sections-container">
                            <div className="settings-general">
                                <div className="settings-general-container">
                                    <span className="settings-general-header">Allgemein</span>
                                    <div className="settings-general-language">
                                        <span>Sprache:</span>
                                        <select id="language" name="language">
                                            <option value="german">Deutsch</option>
                                            <option value="english">English</option>
                                            <option value="french">Français</option>
                                            <option value="spanish">Español</option>
                                        </select>
                                    </div>
                                    <div className="settings-general-currency">
                                        <span>Währung:</span>
                                        <select id="currency" name="currency">
                                            <option value="euro">Euro</option>
                                            <option value="pound">Pfund</option>
                                            <option value="us-dollar">US-Dollar</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="settings-profile">
                                <div className="settings-profile-container">
                                    <span className="settings-profile-header">Profil</span>
                                    <div className="settings-profile-forename">
                                        <span>Vorname:</span>
                                        <input type="text" name="forename" id="forename" placeholder="Tom" />
                                    </div>
                                    <div className="settings-profile-lastname">
                                        <span>Nachname:</span>
                                        <input type="text" name="lastname" id="lastname" placeholder="Wilke" />
                                    </div>
                                    <div className="settings-profile-username">
                                        <span>Username:</span>
                                        <input type="text" name="username" id="username" placeholder="test123" />
                                    </div>
                                    <div className="settings-profile-email">
                                        <span>E-Mail:</span>
                                        <input type="text" name="email" id="email" placeholder="test123@gmail.com" />
                                    </div>
                                    <div className="settings-profile-password">
                                        <span>Passwort:</span>
                                        <input type="password" name="password" id="password"/>
                                    </div>
                                    <div className="settings-profile-password-confirm">
                                        <span>Passwort wiederholen:</span>
                                        <input type="password" name="password-confirm" id="password-confirm"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;