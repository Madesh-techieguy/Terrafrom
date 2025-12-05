import React from "react";

interface Props {
  label: string;
  value: string;
  trend: string;
}

const StatCard: React.FC<Props> = ({ label, value, trend }) => {
  const positive = trend.trim().startsWith("+");
  return (
    <div className="stat-card">
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
      <p className={`stat-trend ${positive ? "up" : "down"}`}>{trend}</p>
    </div>
  );
};

export default StatCard;
