import React, { useState } from "react";

const NotificationSettings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-[#C4D6D9] mb-4">Notification Settings</h2>
      
      {/* Toggle Notification */}
      <div className="flex items-center justify-between mb-4">
        <label className="text-[#F1AEC6] font-bold">Enable Notifications</label>
        <button
          onClick={() => setNotificationsEnabled(!notificationsEnabled)}
          className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
            notificationsEnabled ? "bg-[#FAC0CC]" : "bg-gray-400"
          }`}
        >
          <div className={`w-4 h-4 bg-white rounded-full transition transform ${notificationsEnabled ? "translate-x-6" : ""}`}></div>
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings;
