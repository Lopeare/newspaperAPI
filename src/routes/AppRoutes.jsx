import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, SearchHistory } from '../pages';
import { NavigBar, Footer, DetailedArticle } from '../components';

function AppRoutes() {
  return (
    <>
      <NavigBar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/history" element={<SearchHistory />} />
          <Route path="/details/:id" element={<DetailedArticle />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default AppRoutes;
