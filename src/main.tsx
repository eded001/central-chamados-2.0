import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Layout from "@/app/Layout";
import Dashboard from "@/pages/Dashboard";
import Requests from "@/pages/Requests";
import Settings from "@/pages/Settings";
import Profile from "@/pages/Profile";
import Tests from "@/pages/Tests";
import About from "@/pages/About";
import Account from "@/pages/Account";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="account" element={<Account />} />

        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="requests" element={<Requests />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="tests" element={<Tests />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);