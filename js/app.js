$(document).ready(function() {

  $(".itemInput").focus();

  $(document)

  // Adding an item
  .on('click', '.addItem', function(){
    var item = $('input[name="itemInput"]').val().trim();
    if (item) {
      $(".itemList").append("<li><input type='checkbox' id='>" + item + "'><label for='" + item + "'>" + item + " </label><button class='remove'>X</button></li>");
    }
    $(".itemInput").val('').focus();

  })

  // Remove Item
  .on('click', '.remove', function(){
    $(this).closest('li').remove();
    $(".itemInput").val('').focus();
  });

  // Prevent default submission
  $('.addItem').submit( function(e) {
        e.preventDefault();

        return false;
    });
});
