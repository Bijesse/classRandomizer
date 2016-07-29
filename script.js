$(document).ready(function(){
var students =[
    "Tom",
    "Erica",
    "Alyxe",
    "Michael",
    "Courtney",
    "Joliz",
    ];
    
var random = Math.floor(Math.random()* students.length);

$("button").click(function(){
    $("div").append( students[random] + ", please answer the question");
    });
  });
