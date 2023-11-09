"use client";
export default function Page() {
  const options = {
    body: "Test Body",
    icon: "https://i.pinimg.com/originals/0a/9d/86/0a9d8637b4a3fe2399cb32e4b4164882.jpg",
  };

  const showNotification = () => {
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        new Notification("Test Notification", options);
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification("Test Notification");
          }
        });
      }
    }
  };

  return (
    <div>
      <div>Home</div>
      <button
        onClick={showNotification}
        className="px-4 py-2 bg-green-600 text-white rounded-md"
      >
        Show Notification
      </button>
    </div>
  );
}
