import React, { useState } from 'react';
import './Notification.css';

const NotificationSection = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Notification 1' },
    { id: 2, message: 'Notification 2' },
    { id: 3, message: 'Notification 3' },
  ]);

  const removeNotification = (id) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    );

    setNotifications(updatedNotifications);
  };

  const viewNotification = (id) => {
    // Code to handle viewing a specific notification
    console.log(`Viewing notification with ID: ${id}`);
  };

  return (
    <div className="notification-section">
      {notifications.length === 0 ? (
        <p>No notifications.</p>
      ) : (
        <ul className="notification-list">
          {notifications.map((notification) => (
            <li key={notification.id} className="notification-item">
              <span>{notification.message}</span>
              <div>
                <button
                  className="view-notification-btn"
                  onClick={() => viewNotification(notification.id)}
                >
                  View
                </button>
                <button
                  className="remove-notification-btn"
                  onClick={() => removeNotification(notification.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationSection;
