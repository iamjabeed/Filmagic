import React, { useState } from "react";

import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, i) => {
    setLeft(i * 100);
    setTimeout(() => {
      setSelectedTab(i);
    }, 300);
    onTabChange();
  };
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, i) => (
          <span
            key={i}
            className={`tabItem ${selectedTab === i ? "active" : ""}`}
            onClick={() => activeTab(tab, i)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
