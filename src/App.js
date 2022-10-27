import { Navigate, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import SearchPage from "./components/SearchPage";
import DetailPage from "./components/DetailPage";

function App() {
    return (
        <>
            <SearchPage />
            {/* <Router>
            <div>navbar here</div>
            <Routes>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/search">
                    <SearchPage />
                </Route>
                <Route path="/detail">
                    <DetailPage />
                </Route>
                <Route path="*">
                    <Navigate to="/search" />
                </Route>
            </Routes>
        </Router> */}
        </>
    );

    // return <LoginPage />;
}

export default App;
