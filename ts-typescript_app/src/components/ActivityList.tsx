import React from "react";

interface Activity {
  time: string;
  title: string;
  detail: string;
}

interface Props {
  items: Activity[];
}

const ActivityList: React.FC<Props> = ({ items }) => {
  return (
    <ul className="activity-list">
      {items.map((item, index) => (
        <li key={index} className="activity-item">
          <span className="activity-time">{item.time}</span>
          <div className="activity-main">
            <p className="activity-title">{item.title}</p>
            <p className="activity-detail">{item.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ActivityList;
