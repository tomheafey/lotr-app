import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import SearchPage from "./components/SearchPage";
import DetailPage from "./components/DetailPage";
import { PrivateRoute, PublicRoute } from "./shared/components/ProtectedRoute";
import NavBar from "./shared/components/NavBar";
import loginBg from "./shared/images/moriabg.png";
import searchBg from "./shared/images/minesbg.jpg";
import { connect } from "react-redux";

function App({ auth }) {
    //do i want detail to be a separate page, or a component that conditionally shows up when the user requests details of a specific character?

    const bg = auth ? searchBg : loginBg;
    //lame fix: setting height to 150vh to account for accordion spillover
    return (
        <div
            style={{
                height: "125vh",
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/login" element={<PublicRoute component={<LoginPage />} />} />
                    <Route path="/search" element={<PrivateRoute component={<SearchPage />} />} />
                    {/* <Route path="/detail" element={<PrivateRoute component={<DetailPage />} />} /> */}
                    <Route path="*" element={<Navigate to="/search" />} />
                </Routes>
            </Router>
        </div>
    );
}

const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps)(App);
