var portal = require("/lib/xp/portal");
var httpClient = require("/lib/http-client");

exports.sendMessage = sendMessage;

function sendMessage(data) {
  var title = data.title ? "*" + data.title + "*\n\n" : "";
  var body = data.body ? data.body : "";
  var response = httpClient.request({
    url: data.channel,
    method: "POST",
    body: JSON.stringify({
      text: title + body,
      mrkdwn: true
    }),
    contentType: "application/json"
  });
  return {
    body: "",
    contentType: "text/html"
  };
}
