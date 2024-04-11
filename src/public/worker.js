console.log("worker");

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log(data);
  self.registration.showNotification(data.title, {
    body: data.message,
    icon: "https://e7.pngegg.com/pngimages/982/427/png-clipart-telephone-icon-telephone-call-computer-icons-iphone-symbol-telefono-electronics-rim-thumbnail.png",
  });
  //console.log("Notificacion recibida");
});
