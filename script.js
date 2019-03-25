function testAddMessage(e) {

  var me = $(this)
  var wrapper = $(".message-wrapper.sente")
  var received = $(".message-wrapper.receivede")

  if (e.which ==  13) {

    var txt = me.val()
    me.val("")

    var htmlMsg = getMessage(true, txt);
    wrapper.append(htmlMsg);

    setTimeout( function () {

      // htmlMsg = getMessage(false, "this is not important");
      // received.append(htmlMsg);
      ajaxCall()
    }, 3000);

}
}




function getMessage(sent, content) {
  var messageSent = document.createElement("div");
  $(messageSent).addClass("message");

  if (sent) {

    $(messageSent).addClass("sent");

  } else {

    $(messageSent).addClass("received");

  }

  var messageWrapper = document.createElement("div");
  $(messageWrapper).addClass("message-wrapper")

  var pCont = document.createElement("div")
  $(pCont).addClass("text-p")

  var p = document.createElement("p")
  $(p).text(content)

  var timeCheck = document.createElement("div")
  $(timeCheck).addClass("time-check")

  var check = document.createElement("i")
  $(check).addClass("fas fa-check")

  var timeCont = document.createElement("div")
  $(timeCont).addClass("time")

  var time = document.createElement("span")
  $(time).text("13:35")

  timeCont.append(time)
  timeCheck.append(check)
  timeCheck.append(timeCont)
  messageWrapper.append(timeCheck)
  pCont.append(p)
  messageSent.append(pCont)
  messageWrapper.append(messageSent)



  // messageSent.append(messageWrapper)
  // messageSent.append(content)
  // messageSent.append(timeCheck)
  // messageSent.append(time)


  return messageSent
}

function userSelection() {
  var me = $(this)
  var meIndex = me.index()
  var contacts = $(".contacts")

  contacts.removeClass("active")
  me.addClass("active")

  // var contactMessages = $(".message-wrapper")
  // contactMessages.removeClass("active")
  //
  // var selectedContactMessages = contactMessages.eq(meIndex)
  // selectedContactMessages.addClass("active")
}

function searchContact() {

  var me = $(this)
  var searchText = me.val().toLowerCase()

  var contactWrappers = $(".contacts")
  contactWrappers.removeClass("hide")
  for (var i = 0; i < contactWrappers.length; i++) {
    var contactWrapper = contactWrappers.eq(i)
    var name = contactWrapper.find("b").text().toLowerCase();
    if (!name.includes(searchText)) {
      contactWrapper.addClass("hide");
    }
  }
}

// function messageMenuOpen() {
//   var me = $(this)
//   var menuWrapper = me.find("div.menu-wrapper")
//   menuWrapper.toggleClass("selected")
// }
//
// function messageDelete() {
//   var me = $(this);
//   var deletingMex = me.closest("div.message")
//   deletingMex.remove()
// }

function ajaxCall() {

$.ajax({
  url : "https://www.boolean.careers/api/random/sentence",
  method : "GET",
  success : function (inData, state) {
    if (inData.success == true) {
      var val = inData.response
      var box = getMessage(false, val)
      var wrapper = $(".message-wrapper.receivede")
      wrapper.append(box)
      console.log(box);
    } else {
      console.log("errore");
    }
  },
  error : function (request, state, error) {
    console.log("request", data)
    console.log("state", state)
    console.log("error", error)
  }
})
}

function init() {

  var contacts = $(".contacts")
  contacts.click(userSelection)

  var newMessageTxt = $("input#myText")
  newMessageTxt.keyup(testAddMessage)

  var searchText = $("input#search-text")
  searchText.on("input", searchContact )

  // showMenu()


  var doc = $(document);

  // doc.on("click", "div.time-check", messageMenuOpen)
}

$(document).ready(init)
