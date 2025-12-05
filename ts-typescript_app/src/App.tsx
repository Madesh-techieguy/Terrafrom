import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import StatCard from "./components/StatCard";
import ActivityList from "./components/ActivityList";

// ⭐ Add API base URL from .env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const App: React.FC = () => {
  // ⭐ State for backend stats
  const [stats, setStats] = useState([
    { label: "Active Users", value: "...", trend: "..." },
    { label: "Tasks Completed", value: "...", trend: "..." },
    { label: "API Latency", value: "...", trend: "..." }
  ]);

  // ⭐ State for activities
  const [activities, setActivities] = useState([]);

  // ⭐ Fetch data from Django backend
  useEffect(() => {
    // Example endpoint: /api/dashboard/
    fetch(`${API_BASE_URL}/api/dashboard/`)
      .then((res) => res.json())
      .then((data) => {
        setStats(data.stats);
        setActivities(data.activities);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <Layout>
      <section className="hero">
        <div>
          <h1>DevZen Control Center</h1>
          <p>A clean dashboard to monitor your Django backend in real time.</p>
        </div>
        <div className="hero-pill">
          <span className="dot" />
          <span>Backend: Online</span>
        </div>
      </section>

      <section className="grid-2">
        <div className="card">
          <div className="card-header">
            <h2>Today&apos;s Snapshot</h2>
            <span className="badge">Live</span>
          </div>
          <div className="stats-grid">
            {stats.map((s, i) => (
              <StatCard key={i} label={s.label} value={s.value} trend={s.trend} />
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>Quick Actions</h2>
          </div>
          <div className="actions">
            <button
              className="btn primary"
              onClick={() => alert("Connect this to a backend API later")}
            >
              Sync with Backend
            </button>
            <button className="btn ghost" onClick={() => window.location.reload()}>
              Refresh Dashboard
            </button>
          </div>
          <p className="muted">
            Hook these buttons to your Django API endpoints once they are ready.
          </p>
        </div>
      </section>

      <section className="card full">
        <div className="card-header">
          <h2>Recent Activity</h2>
        </div>
        <ActivityList items={activities} />
      </section>
    </Layout>
  );
};

export default App;

