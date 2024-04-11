const PUBLIC_VAPID_KEY =
  "BBDSVMeqiRdmaVdP_mYkIuODuBG-fKYyKcNt6hiWAGa9uOHxTWuTzA3tDMDhHcn-mDMw7Y2QREqy9tA-nQm016I";

const subscription = async () => {
  //Service Worker
  const register = await navigator.serviceWorker.register("/worker.js", {
    scope: "/",
  });
  console.log("new service worker");

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: PUBLIC_VAPID_KEY,
  });

  await fetch("/subscription", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("Subscripto");
};

subscription();
