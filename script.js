function testAddMessage1() {

  var wrapper = $(".message-wrapper-sent")

  var message = document.createElement("div");
  var messageDetail = document.createElement("p");


  $(message).addClass("sent");

  $(message).text("");
  $(messageDetail).text("");

  
  message.append(messageDetail)

  wrapper.append(message);
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

function textEnter(e) {
  var key = e.which;
  if (key ==  13) {
    testAddMessage1();
  }
}


function init() {
  // var btn1 = $("#myBtn1")
  // btn1.click(testAddMessage1)
  // var btn2 = $("#myBtn2")
  // btn2.click(testAddMessage2)

  var txt = $("#myText");
  txt.keyup(textEnter)

}

$(document).ready(init)


// function init() {
//   console.log("ok");
// }
// $(document).ready(init)



//OBIETTIVO MARTEDI' 12 MARZO
//CREARE UNA DOMANDA E UNA RISPOSTA AUTOMATICA
//CREARE UN MESSAGGIO E SOSTITUIRE LA CLASSE
//
