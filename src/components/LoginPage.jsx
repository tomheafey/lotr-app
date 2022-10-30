import React, { useState } from "react";
import { connect } from "react-redux";
import { setAuth, revokeAuth } from "../shared/redux/authSlice";
import "../shared/css/LoginPage.css";

const LoginPage = ({ setAuth }) => {
    const [password, setPassword] = useState("");
    //set auth state when password === env.pw?

    return (
        <div className="input-container">
            <div>speak friend and enter</div>
            <div>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
                <button
                    id="login"
                    onClick={() => {
                        if (password === process.env.REACT_APP_PASSWORD) {
                            console.log("authorized");
                            return setAuth();
                        }
                        return;
                    }}
                >
                    Enter
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAuth: () => dispatch(setAuth()),
    };
};
const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
