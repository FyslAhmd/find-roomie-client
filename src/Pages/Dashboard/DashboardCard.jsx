import React from "react";

const DashboardCard = ({ title, value, color }) => {
  return (
    <div className={`p-6 ${color} text-white rounded-lg text-center`}>
      {value && <h3 className="text-2xl font-bold mb-2">{value}</h3>}
      <h4 className="text-2xl font-semibold">{title}</h4>
    </div>
  );
};

export default DashboardCard;
