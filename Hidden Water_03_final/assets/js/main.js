
//drop-down-country
button = document.querySelector('button');
datalist = document.querySelector('datalist');
select = document.querySelector('select');
options = document.querySelector('select.options');



//load JSON

// Loading from JSON




/* on arrow button click, show/hide the DDL*/
button.addEventListener('click', toggle_ddl);

function toggle_ddl() {
  if (datalist.style.display === '') {
    datalist.style.display = 'block';
    this.textContent = "▲";
    /* If input already has a value, select that option from DDL */
    var val = input.value;
    for (var i = 0; i < options.length; i++) {
      if (options[i].text === val) {
        select.selectedIndex = i;
        break;
      }
    }
  } else hide_select();
}

/* when user selects an option from DDL, write it to text field */


/* when user wants to type in text field, hide DDL */
function hide_select() {
  datalist.style.display = '';
  button.textContent = "▼";
}

input = document.querySelector('input');
input.addEventListener('focus', hide_select());

function fill_input() {
  input.value = options[this.selectedIndex].value;
  // hide_select();
}

 select.addEventListener('change', fill_input());

// select.addEventListener("change", function() {
//     if(datalist.value == "addNew")
//     {
//         fill_input()
//     }
// });


//number picker
$(function() {
    // -- increase and decrease number on click
    $('.input-group-number').on('click', '.btn', function () {
        var inputNum = $(this).parent('.input-group-btn').siblings('input[type="number"]');
        var inputVal = inputNum.val() || 0;
        var min = parseInt(inputNum.prop('min'));
        var max = parseInt(inputNum.prop('max'));
        var incrementNum = $(this).data('increment') || 0;
        var incrementVal = parseInt(inputVal) + parseInt(incrementNum);

        if ( incrementVal >= max && max != null ) {
            $( inputNum ).val( max );
        }
        else if ( min >= incrementVal && min != null ) {
            $( inputNum ).val( min );
        }
        else {
            $( inputNum ).val( incrementVal );
        }
    });

    // Validate min and max values
    $('.input-group-number').on('change', 'input[type="number"]', function () {
        if ($(this).prop("max")) {
            if(parseInt($(this).prop("max")) < $(this).val()) {
                $(this).val(parseInt($(this).prop('max')));
            }
        }
        if ($(this).prop("min")) {
            if(parseInt($(this).prop("min")) > $(this).val()) {
                $(this).val(parseInt($(this).prop('min')));
            }
        }
    });
});
