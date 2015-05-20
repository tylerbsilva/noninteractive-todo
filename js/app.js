$(document).ready(function() {

  $(".itemInput").focus();

  $(document)

  // Adding an item
  .on('click', '.addItem', function(){
    var item = $('input[name="itemInput"]').val().trim();
    if (item) {
      $(".itemList").append("<li><input type='checkbox'>" + item + "<button>X</button></li>");
    }
    $(".itemInput").val('').focus();

  });

  $('.addItem').submit( function(e) {
        e.preventDefault();

        return false;
    });
});
