import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FormContextProvider } from "./context/form-context";
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import AddOns from "./pages/AddOns";
import Overwiew from "./pages/Overview";
import ThankYou from "./pages/ThankYou";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/select-plan", element: <Plan /> },
      { path: "/add-ons", element: <AddOns /> },
      { path: "/finishing-up", element: <Overwiew /> },
      { path: "/thank-you", element: <ThankYou /> },
    ],
  },
]);

function App() {
  return (
    <FormContextProvider>
      <RouterProvider router={router} />
    </FormContextProvider>
  );
}

export default App;
