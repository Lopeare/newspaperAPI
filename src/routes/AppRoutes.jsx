import { Navigate, Route, Routes } from "react-router-dom"
import { NavigBar, Footer } from "../components"
import { Home, SearchHistory } from "../pages"

export const AppRoutes = () => {
    return (
        <>
            <NavigBar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<SearchHistory />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/*" element={<Home />} />
            </Routes>
            <Footer />
        </>
    )
}
