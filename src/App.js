import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import SearchPage from "./components/SearchPage";
import DetailPage from "./components/DetailPage";
import { PrivateRoute, PublicRoute } from "./shared/components/ProtectedRoute";

function App() {
    return (
        <>
            {/* <SearchPage /> */}
            {/* <DetailPage /> */}
            <Router>
                <div>navbar here</div>
                <Routes>
                    <Route path="/login" element={<PublicRoute component={<LoginPage />} />} />
                    <Route path="/search" element={<PrivateRoute component={<SearchPage />} />} />
                    <Route path="/detail" element={<PrivateRoute component={<DetailPage />} />} />
                    <Route path="*" element={<Navigate to="/search" />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
