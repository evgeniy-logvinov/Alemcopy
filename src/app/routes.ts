import { createBrowserRouter } from "react-router";
import { Onboarding } from "./pages/Onboarding";
import { Consent } from "./pages/Consent";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";
import { TaskExecution } from "./pages/TaskExecution";
import { Transcription } from "./pages/Transcription";
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/Privacy";
import { NotFound } from "./pages/NotFound";
import { Loader } from "./components/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Onboarding,
    HydrateFallback: Loader,
  },
  {
    path: "/onboarding",
    Component: Onboarding,
    HydrateFallback: Loader,
  },
  {
    path: "/consent",
    Component: Consent,
    HydrateFallback: Loader,
  },
  {
    path: "/terms",
    Component: Terms,
    HydrateFallback: Loader,
  },
  {
    path: "/privacy",
    Component: Privacy,
    HydrateFallback: Loader,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    HydrateFallback: Loader,
  },
  {
    path: "/profile",
    Component: Profile,
    HydrateFallback: Loader,
  },
  {
    path: "/task/:taskId",
    Component: TaskExecution,
    HydrateFallback: Loader,
  },
  {
    path: "/transcription/:taskId",
    Component: Transcription,
    HydrateFallback: Loader,
  },
  {
    path: "/loader",
    Component: Loader,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
