import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { PageSobre } from '../pages/Sobre';
import { PageProjetos } from '../pages/Projetos';
import { PageContato } from '../pages/Contatos';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        
    },

    {
        path: '/sobre',
        element: <PageSobre />,
        
        
    },

    {
        path: '/projetos',
        element: <PageProjetos />,
        
    },

    
    {
        path: '/contatos',
        element: <PageContato />,
        
    },

    {
        "rewrites": [
            {
                "source": "/(.*)",
                "destination": "/"
            }
        ]
    }
    

]);



export const AppRouter = () => <RouterProvider router={router} />;