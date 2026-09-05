import { useEffect, useState } from "react";

import { getUserCount } from "../services/userService";

function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchUserCount() {
    try {
      setLoading(true);
      setError(null);

      const response = await getUserCount();

      setUserCount(response.count);
    } catch (error) {
      console.error("Failed to fetch user count:", error);

      setError("Unable to load user count.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserCount();
  }, []);

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <h2>Dashboard</h2>
          <p>Overview of your user management system.</p>
        </div>
      </div>

      <section className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-card-header">
            <span>Total Users</span>
          </div>

          <div className="stat-value">{loading ? "..." : userCount}</div>

          {error && <p className="error-text">{error}</p>}

          {!loading && !error && (
            <p className="stat-description">Total registered users</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
