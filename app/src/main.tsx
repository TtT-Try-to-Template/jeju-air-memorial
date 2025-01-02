import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App';
import { urlPaths } from './features/Router';
import './index.css';
import LandingRouter from "@/pages/router/LandingRouter";
import Post from "@/pages/Post";
import ReactGA from "react-ga4";

ReactGA.initialize(import.meta.env.VITE_GA_KEY);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <BrowserRouter>
        <Routes>
          <Route path={urlPaths.root} element={<LandingRouter />} />
          <Route path={urlPaths.post} element={<Post />} />
        </Routes>
      </BrowserRouter>
    </App>
  </StrictMode>,
);
