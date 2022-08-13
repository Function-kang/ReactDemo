import { useRoutes } from "react-router-dom";
import React from 'react';

import { Home } from "../views/Home";
import { ExamEven } from "../views/Exam/Even";
import { ExamOdd } from "../views/Exam/Odd";

export const Router: React.FC = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/exam/even",
      element: <ExamEven />
    },
    {
      path: "/exam/odd",
      element: <ExamOdd />
    }
  ]);
}
