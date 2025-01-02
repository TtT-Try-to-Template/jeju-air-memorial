import React, { useState } from 'react';
import Landing from "@/pages/Landing";
import Home from "@/pages/Home";

const LandingRouter: React.FC = () => {
  const [landingDone, setLandingDone] = useState(() => {
    const landing = sessionStorage.getItem("landing");
    return !!landing;
  });

  if (!landingDone) return <Landing onLand={() => setLandingDone(true)} />;

  return <Home />
}

export default LandingRouter;
