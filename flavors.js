$(document).ready(function() {
  var flavors = ['Vanilla', 'Chocolate', 'Rocky Road', 'Strawberry', 'Mint'];
  var count = 0;

    $('.btn').click(function(){
      if (count > flavors.length - 1) {
        alert('All done.');
      }
      else {
      $('.text').append("<div class='add'>" + "<h4>" + flavors[count] + "</h4>" + "</div>");
      count++;
      }
    });


});//ready
