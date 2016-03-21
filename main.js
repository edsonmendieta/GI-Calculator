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
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
  
  
  // Dynamically adds checked food item to breakfast list 
  $('input').on('ifChecked', function(event) {       
    var liText = $(this).parent().parent().text();
    $('.food-list').append('<li class=>' + liText + '</li>');
    
})
  
  // Dynamically removes un-checked food item from breakfast list
  $('input').on('ifUnchecked', function(event) {
    var liText = $(this).parent().parent().text();
    $('li:contains(' + liText + ')').remove();
})
  

  $('.fatsecret_home_search_input').val(poop);


  

  
  
  
  
  
});