import { createBrowserRouter } from "react-router";
import urlPaths from "./path";
import Landing from "@/pages/Landing";

const routes = createBrowserRouter([
  {
    path: urlPaths.root,
    element: <Landing />,
  },
]);

export default routes;
