import { Routes, Route, Navigate } from "react-router-dom";

// Components
import { Dashboard } from "../pages/Dashboard";
import { HomePage } from "../pages/HomePage";
import { Tournament } from "../pages/Tournament";
import { AddPlayers } from "../pages/AddPlayers";
import { BracketCard } from "../components/CampCard";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addplayers" element={<AddPlayers />} />
      <Route
        path="/tournament/:id"
        element={<Tournament />}
      />
      {/* TESTE */}
      <Route path="/teste" element={<BracketCard />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
