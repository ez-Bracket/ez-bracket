import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import { Dashboard } from '../pages/Dashboard';
import { HomePage } from '../pages/HomePage';
import { Tournament } from '../pages/Tournament';
import { AddPlayers } from '../pages/AddPlayers';

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addplayers/:idCamp" element={<AddPlayers />} />
      <Route path="/tournament/:idCamp" element={<Tournament />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
