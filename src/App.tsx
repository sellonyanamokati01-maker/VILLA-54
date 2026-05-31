import { Routes, Route } from 'react-router-dom';
import type { ReactElement } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ApplyPage from './pages/ApplyPage';
import ContactPage from './pages/ContactPage';

type AppRoute = {
  path: string;
  element: ReactElement;
};

const appRoutes: AppRoute[] = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/apply', element: <ApplyPage /> },
  { path: '/contact', element: <ContactPage /> },
];

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}
