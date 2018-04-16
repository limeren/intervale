$(function(){
  $('[data-toggle="tooltip"]').tooltip();
  $.mask.definitions['m'] = "[0-1]";
  $.mask.definitions['e'] = "[0-9a-zA-Z.@]";
  $("#input-sender-card").mask("9999  9999  9999  9999");
  $("#input-recipient-card").mask("9999  9999  9999  9999");
  $("#MM-input").mask("m9");
  $("#YY-input").mask("99");
  $("#CVV-input").mask("999");
  $("#total-summ").mask("999?999");
  $("#input-transaction-summ").mask("999?999");
});