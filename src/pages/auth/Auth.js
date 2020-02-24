import React from 'react';
import "./style.scss";

export const Auth = () => {
    return (
        <div className="container">
            <h2>Authentication</h2>

            <form action="">
                <div className="group">
                    <label htmlFor="email">email</label>
                    <input type="text" id="email"/>
                </div>

                <div className="group">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password"/>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
};
