//do i want navbar to appear on login page?

import React from "react";
import { connect, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { revokeAuth } from "../redux/authSlice";

const NavBar = ({ auth, revokeAuth }) => {
    // const auth = useSelector((state) => state.auth);
    return (
        <>
            {auth && (
                <nav>
                    <NavLink to="/search">Search</NavLink>
                    <NavLink to="/detail">Detail</NavLink>
                    <NavLink
                        to="/login"
                        onClick={() => {
                            //clear search & detail
                            revokeAuth();
                        }}
                    >
                        Logout
                    </NavLink>
                </nav>
            )}
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        revokeAuth: () => dispatch(revokeAuth()),
    };
};
const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
