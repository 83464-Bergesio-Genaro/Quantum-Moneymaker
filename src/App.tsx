import { useEffect, type JSX } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import type {RouteObject} from  'react-router-dom';
import MainLayout from './shared/pages/layout/layout'; 
import SharedMain from './shared/pages/main';
import ContactUs from './shared/pages/contact/contactUs';
import AboutUs from './shared/pages/aboutUs/aboutUs';
import Services from './shared/pages/services/services';
import {applyCssVariables} from './config/theme';
import {appConfig } from './config/appConfig';

export default function App(): JSX.Element {
  // 2. Calculamos el basename dinámico (TS infiere que es un string)
  const routerBaseName: string =
    import.meta.env.BASE_URL === "/"
      ? "/"
      : import.meta.env.BASE_URL.replace(/\/$/, "");

  useEffect(() => {
    applyCssVariables();
  }, []);

  useEffect(() => {
    const themeColors = appConfig.themes["light"];
    
    Object.keys(themeColors).forEach((key) => {
      // Forzamos a que TS entienda que key es una propiedad válida de themeColors
      const colorKey = key as keyof typeof themeColors;
      
      document.documentElement.style.setProperty(`--${key}`, themeColors[colorKey]);
    });
  }, []);

  // 4. Tipamos el array de rutas usando 'RouteObject' de react-router-dom
  const routes: RouteObject[] = [
    {
      path: "/",
      handle: { title: "Quantum" },
      element: <MainLayout />, 
      children: [
        /* === PUBLIC ROUTES === */
        {
          index: true, 
          handle: { title: "Home" },
          element: <SharedMain />,
        },
        {
          path: "contact-us",
          handle: { title: "Contacto" },
          element: <ContactUs />,
        },
        {
          path: "about-us",
          handle: { title: "Acerca de Nosotros" },
          element: <AboutUs />,
        },
        {
          path: "services", 
          handle: { title: "Nuestros Servicios" },
          element: <Services />,
        },
      ],
    },
  ];

  // 5. Creamos el router pasando el tipo y las opciones
  const router = createBrowserRouter(routes, {
    basename: routerBaseName,
  });

  return <RouterProvider router={router} />;
}