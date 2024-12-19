import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./pages/Header"));
const Feature = lazy(() => import("./pages/Feature"));
const Posts = lazy(() => import("./pages/Posts"));
const Entertainment = lazy(() => import("./pages/Entertainment"));
const Popular = lazy(() => import("./pages/Popular"));
const Business = lazy(() => import("./pages/Business"));
const Travel = lazy(() => import("./pages/Travel"));
const Latest = lazy(() => import("./pages/Latest"));
const Videos = lazy(() => import("./pages/Videos"));

const RoutesConfig = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/business" element={<Business />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesConfig;
