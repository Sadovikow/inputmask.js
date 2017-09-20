
var inputmaskParams = { // Параметры для маски телефонов
    oncomplete: function(){ },
    onincomplete: function(){ $(this).val(""); },
    oncleared: function(){ $(this).val(""); },
};

$(document).ready(function() {
/* input masks */
    $("input[type='tel']").inputmask("+7(999)999-99-99",{inputmaskParams});
/* input masks end */
});
