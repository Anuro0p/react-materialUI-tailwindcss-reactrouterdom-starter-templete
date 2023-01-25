import { lazy, Suspense } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

const Layouts = lazy(() => import('../layouts/layouts'));
const Home = lazy(() => import('../pages/home/home.page'));

const PublicRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<CircularProgress />}>
              <Layouts />
            </Suspense>
          }
        >
          <Route
            path='home'
            element={
              <Suspense fallback={<CircularProgress />}>
                <Home />
              </Suspense>
            }
          />
          <Route path='test' element={<Box>Hi</Box>} />
        </Route>
      </Routes>
    </div>
  );
};

export default PublicRoutes;
