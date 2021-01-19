import { Box } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ExercisesNavigation from "./ExercisesNavigation";
import Markdown from "./Markdown";
import homeMd from "./Home.md";
const Basics = React.lazy(() => import("./Basics"));
const UseEffect = React.lazy(() => import("./UseEffect"));
const UseLayoutEffect = React.lazy(() => import("./UseLayoutEffect"));

export const routes = [
  {
    path: "/",
    title: "Home 🏠",
    exact: true,
    render: (routeProps) => <Markdown markdown={homeMd} {...routeProps} />
  },
  {
    path: "/basics",
    title: "Basics 📦",
    render: (routeProps) => <Basics {...routeProps} />
  },
  {
    path: "/use-effect",
    title: "UseEffect 🧘🏻‍♂️",
    render: (routeProps) => <UseEffect {...routeProps} />
  },
  {
    path: "/use-layout-effect",
    title: "UseLayoutEffect 🖼",
    render: (routeProps) => <UseLayoutEffect {...routeProps} />
  }
];

const paths = routes.map(({ path, title }) => ({ path, title }));

export default function Routes() {
  return (
    <Router>
      <ExercisesNavigation paths={paths} />
      <Box textAlign="center" margin="0 auto" padding="16px" maxWidth="800px">
        <Switch>
          <React.Suspense fallback="Loading exercise...">
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </React.Suspense>
        </Switch>
      </Box>
    </Router>
  );
}
