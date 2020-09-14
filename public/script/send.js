var $send = $("#sendButton");
var $form = $("#formSend");



var sendMsg = function(phone) {
    console.log("clicked")

    return $.post("/resume",{phone})
    // return $.ajax({
    //   url: "/resume",
    //   data: {
    //     phone:phone
    //   },
    //   phone: phone,
    //   method: "POST",
    //   processData: false,
    //   contentType: false,
    // });
  };
  var send = function() {
    var newNote = {
      phone: $form.val(),

    };
    console.log(newNote.phone)
    sendMsg(newNote).then(function(phone) {
        console.log("sent")

    });
  };
  $send.on("click", send);
