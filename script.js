// function testAddMessage1() {
//
//   var wrapper = $(".wrapper")
//
//   var message = document.createElement("div");
//   var messageContent = document.createElement("p");
//   var messageDetail = document.createElement("small");
//
//   $(message).addClass("message");
//   $(message).addClass("sent");
//
//   $(messageContent).text("messaggio dinamico");
//   $(messageDetail).text("dettagli messaggio dinamico");
//
//   message.append(messageContent)
//   message.append(messageDetail)
//
//   wrapper.append(message);
// }
//
//
// function testAddMessage2() {
//
//   var wrapper = $(".wrapper")
//
//   var message = document.createElement("div");
//   var messageContent = document.createElement("p");
//   var messageDetail = document.createElement("small");
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
//
// function textEnter(e) {
//   var key = e.which;
//   if (key ==  13) {
//     testAddMessage2();
//   }
// }
//
//
// function init() {
//   var btn1 = $("#myBtn1")
//   btn1.click(testAddMessage1)
//   var btn2 = $("#myBtn2")
//   btn2.click(testAddMessage2)
//
//   var txt = $("#myText");
//   txt.keyup(textEnter)
//
// }
//
// $(document).ready(init)


function init() {
  console.log("ok");
}
$(document).ready(init)
