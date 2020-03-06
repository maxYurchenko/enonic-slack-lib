var portal = require("/lib/xp/portal");
var httpClient = require("/lib/http-client");

exports.sendMessage = sendMessage;

function sendMessage(data) {
  var title = data.title ? "**" + data.title + "**\n" : "";
  var body = data.body ? data.body : "";
  var response = httpClient.request({
    url: data.webhookUrl,
    method: "POST",
    body: JSON.stringify({
      content: title + body
    }),
    contentType: "application/json"
  });
  return {
    body: "",
    contentType: "text/html"
  };
}
