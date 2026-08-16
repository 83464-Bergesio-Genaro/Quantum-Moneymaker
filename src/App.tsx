import { useEffect, type JSX } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

// 1. IMPORTACIONES DE MATERIAL UI Y TU TEMA
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme, applyCssVariables } from './config/theme'; 

import MainLayout from './shared/pages/layout/layout'; 
import SharedMain from './shared/pages/home/home';
import ContactUs from './shared/pages/contact/contactUs';
import AboutUs from './shared/pages/aboutUs/aboutUs';
import Services from './shared/pages/services/services'; 

export default function App(): JSX.Element {
  const routerBaseName: string =
    import.meta.env.BASE_URL === "/"
      ? "/"
      : import.meta.env.BASE_URL.replace(/\/$/, "");

  useEffect(() => {
    applyCssVariables();
  }, []);

  const routes: RouteObject[] = [
    {
      path: "/",
      handle: { title: "Quantum" },
      element: <MainLayout />, 
      children: [
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

  const router = createBrowserRouter(routes, {
    basename: routerBaseName,
  });

  // 3. ENVOLVEMOS EL ROUTER CON EL PROVEEDOR DE TEMA
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Aplica las fuentes base al body y resetea CSS */}
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}