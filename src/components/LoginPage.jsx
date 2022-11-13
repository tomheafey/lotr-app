import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { setAuth, revokeAuth } from "../shared/redux/authSlice";
import "../shared/css/LoginPage.css";
import "../shared/css/Inputs.css";
import { Button } from "../shared/styled/Button";

const LoginPage = ({ setAuth }) => {
    const [password, setPassword] = useState("");
    const textInput = useRef(null);

    //TODO: some sort of indication of failed login
    //TODO: add spacing at top of page

    return (
        <form className="input-container">
            <div>
                <label htmlFor="password">speak friend and enter</label>
            </div>
            <div>
                <input ref={textInput} type="password" id="password" autoFocus value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
                <Button
                    id="login"
                    disabled={password.length < 4}
                    onClick={(e) => {
                        e.preventDefault();
                        if (password === process.env.REACT_APP_PASSWORD) {
                            console.log("authorized");
                            return setAuth();
                        }
                        //! if password incorrect
                        setPassword("");
                        textInput.current.focus();

                        return;
                    }}
                >
                    Enter
                </Button>
            </div>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAuth: () => dispatch(setAuth()),
    };
};
const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
