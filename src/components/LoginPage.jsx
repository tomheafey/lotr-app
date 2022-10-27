import React, { useState } from "react";
import { connect } from "react-redux";
import { setAuth, revokeAuth } from "../shared/redux/authSlice";

const LoginPage = () => {
    const [password, setPassword] = useState("");
    //set auth state when password === env.pw?

    return (
        <>
            <div>sfae</div>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button id="login" onClick={password === process.env.REACT_APP_PASSWORD ? setAuth : () => {}}>
                Enter
            </button>
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAuth: () => dispatch(setAuth),
    };
};
const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
