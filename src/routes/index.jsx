import { Home } from '../containers/Home'
import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../containers/Login';
import { Register } from '../containers/register';
import { Menu } from '../containers/Menu';
import { Header } from '../components/Header';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <Home />

            </>
        ),
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
    {
        path: '/cardapio',
        element: (
            <>
                <Header />
                <Menu />

            </>
        ),
    },
]);