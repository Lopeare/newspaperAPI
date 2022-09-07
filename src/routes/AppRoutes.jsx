import { Navigate, Route, Routes } from "react-router-dom"
import { NavigBar, Footer } from "../components"
import { Home, SearchHistory, DetailedArticle } from "../pages"

export const AppRoutes = () => {
    return (
        <>
            <NavigBar />
            <div className="container">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/history" element={<SearchHistory />} />
                    <Route path="/detailedArticle" element={<DetailedArticle />} />
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/*" element={<Home />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}
