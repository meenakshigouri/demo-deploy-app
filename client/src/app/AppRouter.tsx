import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("../modules/Home"));

const pathArray = [
  {
    path: "/",
    Component: Home,
  },
];

const AppRouter = () => {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        {pathArray.map(({ path, Component }) => (
          <Route path={path} key={path} element={<Component />}></Route>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
