import { lazy } from "react";

const routes = [
  {
    key: "user-list",
    path: `/user-list`,
    component: lazy(() => import("../../view/user/user-list")),
    authority: [],
  },
];

export default routes;
