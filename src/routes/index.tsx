import { Routes, Route, Navigate } from "react-router-dom";

// Components
import { Dashboard } from "../pages/Dashboard";
import { HomePage } from "../pages/HomePage";
import { Tournament } from "../pages/Tournament";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/tournament/:id"
        element={<Tournament />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
