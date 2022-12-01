import './App.css';
import NotificationItems from './NotificationItems';
import originalItems from './notifications.json';
import React, { useState } from 'react';

function countUnreadNotifications(items) {
  var count = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].status==="unread") {
      count++;
    }
  }
  return count;
}

function MarkAllAsRead(notifications, setNotifications) {
  console.log("MarkAllAsRead - IN");
  const newNotifications = [...notifications];
  for (var i = 0; i < newNotifications.length; i++) {
    newNotifications[i].status = "read";
  }
  console.log("MarkAllAsRead - OUT");
  setNotifications(prevNotifications => {
    return newNotifications;
  });
}

function App() {
  const [notifications, setNotifications] = useState(originalItems.Notifications);
  var unreadNotificationCount = countUnreadNotifications(notifications);
  return (
    <div>
      <div class="NotificationsBox">
        <div class="NotificationsHeader">
          <h1 class="Title">Notifications <span id="NumberOfUnreadNotifications">{unreadNotificationCount}</span></h1>
			    <div class="MarkAllAsRead" onClick={() => MarkAllAsRead(notifications, setNotifications)}> Mark all as read</div>
        </div>
        <div class="NotificationItems">
          <NotificationItems items={notifications} />
        </div>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">andyh444</a>.
      </div>
    </div>
  );
}

export default App;
