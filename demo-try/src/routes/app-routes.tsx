import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";

const TaskOne = lazy(async () => await import("@pages/task-one"));

export const AppRoutes: RouteObject | any = [
  {
    path: "/",
    element: (
      <Suspense fallback={<>loading</>}>
        <TaskOne />
      </Suspense>
    ),
  },
];

export const MainRoute = createBrowserRouter(AppRoutes);
