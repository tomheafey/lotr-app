import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import SearchPage from "./components/SearchPage";
import DetailPage from "./components/DetailPage";
import { PrivateRoute, PublicRoute } from "./shared/components/ProtectedRoute";
import NavBar from "./shared/components/NavBar";
import bg from "./shared/images/moriabg.png";

function App() {
    //do i want detail to be a separate page, or a component that conditionally shows up when the user requests details of a specific character?

    return (
        <div
            style={{
                height: "100vh",
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            {/* <SearchPage /> */}
            {/* <DetailPage /> */}
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

export default App;
