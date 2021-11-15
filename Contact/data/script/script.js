$(document).ready(function() {
  $("#email_error").hide();
  $("#number_error").hide();
  $("#msg_length_error").hide();
  $("#name_empty_error").hide();
  $("#lastname_empty_error").hide();
  $("#email_empty_error").hide();
  $("#number_empty_error").hide();
  $("#msg_empty_error").hide();

  $("#contact_form").submit(function(event) {
    event.preventDefault();

    //empty name
    if ($("#name").val().length > 0) {
      $("#name_empty_error").hide();
    } else {
      $("#name_empty_error").show();
    }

    //empty lastname
    if ($("#lastname").val().length > 0) {
      $("#lastname_empty_error").hide();
    } else {
      $("#name_empty_error").show();
    }

    //empty email
    if ($("#email").val().length > 0) {
      $("#email_empty_error").hide();
    } else {
      $("#email_empty_error").show();
    }

    //empty number
    if ($("#number").val().length > 0) {
      $("#number_empty_error").hide();
    } else {
      $("#number_empty_error").show();
    }
    //empty msg
    if ($("#msg").val().length > 0) {
      $("#msg_empty_error").hide();
    } else {
      $("#msg_empty_error").show();
    }


    //length num
    regexNum = /^[0-9]{10}$/;
    if (regexNum.test($("#number").val())) {
      $("#number_error").hide();
    } else {
      $("#number_error").show();
    }

    //length msg
    if ($("#msg").val().length <= 200) {
      $("#msg_length_error").hide();
    } else {
      $("#msg_length_error").show();
    }

    //email check
    regexEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,}$/;
    if (regexEmail.test($("#email").val())) {
      $("#email_error").hide();
    } else {
      $("#email_error").show();
    }
  });
});