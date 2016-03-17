$(document).ready(function() {
  
  
  $(".page-header").fitText()
  
  
  
  
  $('input').iCheck({
    checkboxClass: 'icheckbox_flat-green',
    radioClass: 'iradio_flat-green',
    increaseArea: '20%',
  });
  
  
  
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
  


  

  
  
  
  
  
});