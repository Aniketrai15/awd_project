
$(document).ready(function(){
  $('#booksbtn').click(function(){
    $('.horizontal-divs div ul').toggleClass('dropdown_content')
  })
})

function signup(){
  window.open("signup.html","_parent");
}

function login(){
  window.open("login.html","_parent");
}