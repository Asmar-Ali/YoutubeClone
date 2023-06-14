import React from "react";
import { createBrowserRouter } from "react-router-dom";

import {
  VideoDetails,
  ChannelDetails,
  Feed,
  SearchFeed,
  Navbar,
} from "../src/Components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "video/:id",
        element: <VideoDetails />,
      },
      {
        path: "channel/:id",
        element: <ChannelDetails />,
      },
      {
        path: "search/:searchTerm",
        element: <SearchFeed />,
      },
    ],
  },
]);

export default router;
