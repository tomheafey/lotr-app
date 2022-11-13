import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { setAuth, revokeAuth } from "../shared/redux/authSlice";
import "../shared/css/LoginPage.css";
import { Button } from "../shared/styled/Button";
import { Input } from "../shared/styled/Input";
import { FormContainer } from "../shared/styled/FormContainer";
import { InvalidDiv } from "../shared/styled/InvalidDiv";

const LoginPage = ({ setAuth }) => {
    const [password, setPassword] = useState("");
    const textInput = useRef(null);
    const [badPwEntered, setBadPwEntered] = useState(false);
    //TODO: add spacing at top of page

    return (
        <FormContainer>
            <div>
                <label htmlFor="password">speak friend and enter</label>
            </div>
            <div>
                <Input
                    ref={textInput}
                    type="password"
                    id="password"
                    autoFocus
                    value={password}
                    onChange={(e) => {
                        setBadPwEntered(false);
                        setPassword(e.target.value);
                        return;
                    }}
                />
            </div>
            <InvalidDiv>{badPwEntered && "incorrect password, please try again"}</InvalidDiv>
            <div>
                <Button
                    id="login"
                    disabled={password.length < 4}
                    onClick={(e) => {
                        e.preventDefault();
                        if (password === process.env.REACT_APP_PASSWORD) {
                            return setAuth();
                        }
                        //! if password incorrect
                        setPassword("");
                        setBadPwEntered(true);
                        textInput.current.focus();

                        return;
                    }}
                >
                    Enter
                </Button>
            </div>
        </FormContainer>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAuth: () => dispatch(setAuth()),
    };
};
const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
