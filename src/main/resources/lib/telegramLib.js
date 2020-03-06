var portal = require("/lib/xp/portal");
var httpClient = require("/lib/http-client");

exports.sendMessage = sendMessage;

var BASE_URL = "https://api.telegram.org/";

function sendMessage(data) {
  var title = data.title ? "<b>" + data.title + "</b>\n" : "";
  var body = data.body ? data.body : "";
  var response = httpClient.request({
    url: BASE_URL + data.botId + "/sendMessage",
    method: "GET",
    params: {
      text: encodeURI(title + body),
      parse_mode: "HTML",
      chat_id: data.chatId
    },
    contentType: "application/json"
  });
  return {
    body: "",
    contentType: "text/html"
  };
}
