import React from 'react';

const Notification = ({ notificationMessage, notificationType }) => {
  if (notificationType === 'error') {
    return <div className="error">{notificationMessage}</div>;
  } else if (notificationType === 'success') {
    return <div className="success">{notificationMessage}</div>;
  } else {
    return <div />;
  }
};

export default Notification;
