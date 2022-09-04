import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/NavBar/Navbar"
import { Newspaper } from "../components/Newspaper/Newspaper"
import '../index.css'

export const AppRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/articles" element={<Newspaper />} />
                    <Route path="/" element={<Navigate to="/articles" />} />
                    <Route path="/*" element={<Newspaper />} />
                </Routes>
            </div>
        </>
    )
}
