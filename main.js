$(document).ready(function() {
  
  
  $(".page-header").fitText()
  
  // Initializes Fat Scecret API
fatsecret.setContainer("my_container");
fatsecret.setCanvas("home");
  
  
  
  // Initialisizes icheck.js and sets styles of checkboxes
  $('input').iCheck({
    checkboxClass: 'icheckbox_flat-green',
    radioClass: 'iradio_flat-green',
    increaseArea: '20%',
  });
  
  // initilizes Bootstrap Tooltips
    $('[data-toggle="tooltip"]').tooltip();  
  
  
  // Dynamically adds checked food item and serving selection, wrapped in a div, to breakfast list 
  $('input').on('ifChecked', function(event) {       
    var liText = $(this).parent().parent().text();
//     var newLi= $('<li class=>' + liText + '</li>');
//     var servings = $('<select class="serving-size"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select>');
    var wrappedUp = $('<div><li class=>' + liText + '</li><select class="serving-size"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></div>');
    $('.food-list').append(wrappedUp);
//     $('.food-list').append('<li class=>' + liText + '</li>');
//     $('.food-list').append(servings);
    
})
  
  // Dynamically removes un-checked food item from breakfast list
  $('input').on('ifUnchecked', function(event) {
    var liText = $(this).parent().parent().text();
    $('.food-list div:contains(' + liText + ')').remove();
//     $('li:contains(' + liText + ')').remove();
})
  

//   $('.fatsecret_home_search_input').val(poop);


  

  
  
  
  
  
});