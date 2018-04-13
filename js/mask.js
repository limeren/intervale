
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
});


$(function(){

    $.mask.definitions['m'] = "[0-1]";
    $.mask.definitions['e'] = "[0-9a-zA-Z.@]";
    $("#inputSenderCard").mask("9999  9999  9999  9999");
    $("#inputRecipientCard").mask("9999  9999  9999  9999");
    $("#MM-input").mask("m9");
    $("#YY-input").mask("99");
    $("#CVV-input").mask("999");
    $("#totalSumm").mask("999?999");
    $("#inputTransactionSumm").mask("999?999");
    $("#inputEmail").mask("eeee?eeeeeeeeeeeeeeee");


});

