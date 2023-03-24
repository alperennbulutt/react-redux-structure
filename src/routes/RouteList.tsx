import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import DashboardPage from '../pages';

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};
