function testAddMessage(e) {

  var me = $(this)
  var wrapper = $(".message-wrapper-sent")
  var key = e.which;
  if (key ==  13) {

    var txt = me.val()
    me.val("")

    var htmlMsg = getMessage();
    wrapper.append(htmlMsg);


}


// function testAddMessage2() {
//
//   var wrapper = $(".message-wrapper")
//
//   var message = document.createElement("div");
//   var messageContent = document.createElement("p");
//
//   $(message).addClass("message");
//   $(message).addClass("received");
//
//   $(messageContent).text("messaggio dinamico");
//   $(messageDetail).text("dettagli messaggio dinamico");
//
//   message.append(messageContent)
//   message.append(messageDetail)
//
//   wrapper.append(message);
// }

function getMessage(sent, content) {
  var messageSent = document.createElement("div");
  $(messageSent).addClass("message");

  if (sent) {
    $(messageSent).addClass("sent");
  } else {
    $(messageSent).addClass("received");
  }

  var messageWrapper = document.createElement("div");
  $(messageWrapper).addClass("message-rapper-sent")

  var p = document.createElement("p")
  $(p).text(content)
}




function init() {
  // var btn1 = $("#myBtn1")
  // btn1.click(testAddMessage1)
  // var btn2 = $("#myBtn2")
  // btn2.click(testAddMessage2)

  var newMessageTxt = $("input#myText")
  newMessageTxt.keyup(testAddMessage)


}

$(document).ready(init)
