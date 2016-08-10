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
    var wrappedUp = $('<div class="active"><li>' + liText + '</li><select class="serving-size"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></div>');
    $('.food-list').append(wrappedUp);
    $(wrappedUp).addClass('' + liText + '');
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
  
  
  var foodLoads = {
    orange: 6.7,
    apple: 5.6,
    banana: 12.7,
    grapes: 16.3,
    peach: 2.7,
    pear: 6.5,
    mango: 16.1,
    blueberries: 9.3,
    grapefruit: 1.7,
    strawberries: 3.5,
    tangerine: 3.1,
    watermelon: 8,
    duck: 0,
    beef: 0,
    chicken: 0,
    ham: 0,
    turkey: 0,
    elk: 0,
    pork: 0,
    fish: 0,
    eggs: 0,
    lamb: 0,
    applejuice: 11.8,
    cranberryjuice: 23.3,
    orangejuice: 14.4,
    carrotjuice: 8.6,
    lemonade: 24.3,
    hotchocolatemix: 10.2,
    tomatojuice: 3.5,
    chocolatemilk: 13.3,
    almondmilk: 0.02,
    soymilk: 4,
    wholewheatbread: 6.1,
    whitebread: 10.7,
    bagel: 30,
    waffle: 13.8,
    pancake: 5.3,
    croissant: 12.2,
    muffin: 28.8,
    englishmuffin: 21.3,
    doughnut: 15.2,
    oatmeal: 12.6,
    quinoa: 20.4,
    wholegrainbread: 7.1 
  }

// Gives the GI load of selected food items on-click of "Get Loads" button: GI load of selected food item * selected # of servings.
$('.submit-items').on('click', function() {
  $('.food-list .active li').each(function() {
    var foodName = $(this).text().trim(); // Grabs food item name + trims whitespace in HTML to avoid messing with finding a match in the foodLoads object.
    var giLoad = foodLoads[foodName]; // GI value of 1 serving of selected food item.
    var servings = $(this).next().val() * giLoad; // The multiplication.
    $(this).parent().append('<p>' + servings + '</p>');
  })
 


})

  
  
  
  
  
});