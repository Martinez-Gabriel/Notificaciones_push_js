const webpush = require("web-push");

webpush.setVapidDetails(
  "mailto: gmartinez@exo.com.ar",
  process.env.PUBLIC_VAPID_KEY,
  process.env.PRIVATE_VAPID_KEY
);

//console.log(process.env.PUBLIC_VAPID_KEY);

module.exports = webpush;
