import { createBrowserRouter, RouterProvider, Navigate, useLocation } from "react-router-dom";



import { About, Home, AdminPage, ErrorPage, LoginPage, Volunteer, Gallery, ContactPage, Team, Partners, Projects, Donate } from "./pages";


import { MainLayout } from "./layout/main-layout";
import type { JSX } from "react";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const isAuthenticated = !!localStorage.getItem("token");
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/meu-login",
        element: <LoginPage />,
      },
      
    {
      path: "/meu-painel-secreto-luco",
      element: (
        <RequireAuth>
          <AdminPage />
        </RequireAuth>
      ),
    },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/volunteer",
        element: <Volunteer />,
      },
      {
        path: "/team",
        element: <Team/>,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/donate",
        element: <Donate />,
      }
    ],
  },
]);

export const Routes = () => {
 
  return <RouterProvider router={router} />;
}