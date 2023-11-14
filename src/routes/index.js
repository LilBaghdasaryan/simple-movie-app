import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import LazyLoad from '../components/LazyLoad';

const Home = lazy(() => import('../pages/Home'));
const LazyHome = props => <LazyLoad component={Home} {...props} />;

export default function getRoutes() {
    return (
        <Routes>
            <Route element={<LazyHome />} path="/" />
        </Routes>
    )
}