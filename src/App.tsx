import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import WeekPage from './pages/WeekPage';
import Sleep from './pages/Sleep';
import { Analytics } from '@vercel/analytics/react';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            { index: true, element: <Home/> },
            { path: 'uke/:week', element: <WeekPage/> },
            { path: 'sovn', element: <Sleep/> },
            { path: '*', element: <Home/> },
        ],
    },
]);

export default function App() {
    return (
        <div>
          <AppProvider>
            <RouterProvider router={router}/>
          </AppProvider>
          <Analytics />
        </div>
    );
}
