import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { LINKS } from "./static";

const Dashboard = lazy(() => import("./pages/dashboard"));
const NotFound = lazy(() => import("./pages/notFound"));
const School = lazy(() => import("./pages/dashboard/links/School"));
const Events = lazy(() => import("./pages/dashboard/links/Events"));
const Classroom = lazy(() => import("./pages/dashboard/links/Classroom"));
const Pupil = lazy(() => import("./pages/dashboard/links/Pupil"));
const Uniform = lazy(() => import("./pages/dashboard/links/Unifrom"));
const Teacher = lazy(() => import("./pages/dashboard/links/Teacher"));
const Education = lazy(() => import("./pages/dashboard/links/Education"));
const Exams = lazy(() => import("./pages/dashboard/links/Exams"));
const Achievement = lazy(() => import("./pages/dashboard/links/Achievement"));
const Competitions = lazy(() => import("./pages/dashboard/links/Competitions"));
const SchoolNews = lazy(() =>
  import("./pages/dashboard/innerLink/schoolInner/schoolNews")
);
const SchoolPeriod = lazy(() =>
  import("./pages/dashboard/innerLink/schoolInner/schoolPeriod")
);
const Event = lazy(() =>
  import("./pages/dashboard/innerLink/eventInner/Events")
);
const NextEvent = lazy(() =>
  import("./pages/dashboard/innerLink/eventInner/NextEvent")
);
const Whonext = lazy(() =>
  import("./pages/dashboard/innerLink/eventInner/Whonext")
);
const Competition = lazy(() =>
  import("./pages/dashboard/innerLink/competitionInner/Competition")
);
const WhoWon = lazy(() =>
  import("./pages/dashboard/innerLink/competitionInner/WhoWon")
);
const Knowledge = lazy(() =>
  import("./pages/dashboard/innerLink/achievementInner/Knowledge")
);
const Win = lazy(() =>
  import("./pages/dashboard/innerLink/achievementInner/Win")
);
const Girl = lazy(() => import("./pages/dashboard/innerLink/pupilInner"));
const Boy = lazy(() => import("./pages/dashboard/innerLink/pupilInner/Boy"));
const Lessons = lazy(() =>
  import("./pages/dashboard/innerLink/educationInner/Lessons")
);
const Break = lazy(() =>
  import("./pages/dashboard/innerLink/educationInner/Break")
);
const Level = lazy(() =>
  import("./pages/dashboard/innerLink/teacherInner/Level")
);
const InfoTeacher = lazy(() =>
  import("./pages/dashboard/innerLink/teacherInner/InfoTeacher")
);
const BoysUniform = lazy(() =>
  import("./pages/dashboard/innerLink/uniformInner/BoysUniform")
);
const GirlsUniform = lazy(() =>
  import("./pages/dashboard/innerLink/uniformInner/GirlsUniform")
);
const Exam = lazy(() => import("./pages/dashboard/innerLink/examInner/Exams"));
const ControlWork = lazy(() =>
  import("./pages/dashboard/innerLink/examInner/ControlWork")
);
const Number = lazy(() =>
  import("./pages/dashboard/innerLink/classromInner/Number")
);
const English = lazy(() =>
  import("./pages/dashboard/innerLink/classromInner/English")
);

const App = () => {
  return (
    <div>
      <Suspense fallback={"loading"}>
        {useRoutes([
          {
            path: "/",
            element: <Dashboard />,
            children: [
              {
                path: "/",
                element: <School />,
                children: [
                  {
                    index: true,
                    element: <SchoolNews />,
                  },
                  {
                    path: "schoolperiod",
                    element: <SchoolPeriod />,
                  },
                ],
              },
              {
                path: "events",
                element: <Events />,
                children: [
                  {
                    index: true,
                    element: <Event />,
                  },
                  {
                    path: "nextevent",
                    element: <NextEvent />,
                  },

                  {
                    path: "whonext",
                    element: <Whonext />,
                  },
                ],
              },
              {
                path: "pupils",
                element: <Pupil />,
                children: [
                  {
                    index: true,
                    element: <Boy />,
                  },
                  {
                    path: "girl",
                    element: <Girl />,
                  },
                ],
              },
              {
                path: "competitions",
                element: <Competitions />,
                children: [
                  {
                    index: true,
                    element: <Competition />,
                  },
                  {
                    path: "whowon",
                    element: <WhoWon />,
                  },
                ],
              },
              {
                path: "teachers",
                element: <Teacher />,
                children: [
                  {
                    index: true,
                    element: <Level />,
                  },
                  {
                    path: "informationteacher",
                    element: <InfoTeacher />,
                  },
                ],
              },
              {
                path: "uniform",
                element: <Uniform />,
                children: [
                  {
                    index: true,
                    element: <BoysUniform />,
                  },
                  {
                    path: "girluniform",
                    element: <GirlsUniform />,
                  },
                ],
              },
              {
                path: "education",
                element: <Education />,
                children: [
                  {
                    index: true,
                    element: <Lessons />,
                  },
                  {
                    path: "break",
                    element: <Break />,
                  },
                ],
              },
              {
                path: "classrooms",
                element: <Classroom />,
                children: [
                  {
                    index: true,
                    element: <Number />,
                  },
                  {
                    path: "englishclassroom",
                    element: <English />,
                  },
                ],
              },
              {
                path: "exams",
                element: <Exams />,
                children: [
                  {
                    index: true,
                    element: <Exam />,
                  },
                  {
                    path: "controlwork",
                    element: <ControlWork />,
                  },
                ],
              },
              {
                path: "achievement",
                element: <Achievement />,
                children: [
                  {
                    index: true,
                    element: <Win />,
                  },
                  {
                    path: "knowledge",
                    element: <Knowledge />,
                  },
                ],
              },
            ],
          },

          {
            path: "*",
            element: <NotFound />,
          },
        ])}
      </Suspense>
    </div>
  );
};
export default App;
