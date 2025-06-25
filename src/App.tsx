'use client'
import { useNavigate } from "react-router";
import {
  createBrowserRouter,
  NavLink,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/support",
    element: <div><div>Hello from support</div> <OnClickNavigation /></div>,
  },
  {
    path: "/",
    element: <div><div>Hello from the root route</div> <OnClickNavigation /></div>,
  },
  {
    path: "/test",
    element: <div>hello from <NavLink to={'/support'}>test</NavLink></div>,
  },
  {
    path: "*",
    element: <div>404 - Not Found</div>,
  },
]);

function OnClickNavigation() {
    const navigate = useNavigate();

  return <button onClick={() => window.location.href = "https://google.com" }>button</button>
}

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
