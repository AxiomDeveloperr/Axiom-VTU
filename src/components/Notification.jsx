import React from "react";

function NotificationPage() {
  
  const notifications = [
    {
      id: 1,
      title: "Welcome to IOTBTECH!",
      message: "Your application has been received and is under review.",
      date: "January 18, 2025",
    },
    {
      id: 2,
      title: "Assessment Available",
      message: "Your pre-admission assessment is now live. Complete it before January 25, 2025.",
      date: "January 15, 2025",
    },
    {
      id: 3,
      title: "Reminder: Submit Documents",
      message: "Ensure all required documents are uploaded by the end of the month.",
      date: "January 10, 2025",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Notifications</h1>

      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="border-b last:border-none p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-700">{notification.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
              </div>
              <div className="text-sm text-gray-500 mt-2 sm:mt-0">{notification.date}</div>
            </div>
          ))
        ) : (
          <p className="p-4 text-center text-gray-600">No notifications available.</p>
        )}
      </div>
    </div>
  );
}

export default NotificationPage;
