"use strict";

/********************************************************************

FFAR Portfolio
Lilia Isabel Aguirre Lugo

*********************************************************************/
let $button1;
let $button2;
let $button3;
let $button4;
let $button5;
let $button6;
let $button7;

let imageRemix;

$(document).ready(setup)

function setup(){
imageRemix = new Audio("assets/sounds/imageRemix.wav");

$button1 = $('#button1');
$button2 = $('#button2');
$button3 = $('#button3');
$button4 = $('#button4');
$button5 = $('#button5');
$button6 = $('#button6');
$button7 = $('#button7');



button1();
button2();
button3();
button4();
button5();
button6();
button7();

}

function prompt1(){
  if ($('.prompt1').css('display') === 'none'){
    $('.prompt1').css('display','block');
    imageRemix.play();
  }
  else{
    $('.prompt1').css('display','none');
    imageRemix.pause();
  }
}
function prompt2(){
  if ($('.prompt2').css('display') === 'none'){
    $('.prompt2').css('display','block');
  }
  else{
    $('.prompt2').css('display','none');
  }
}
function prompt3(){
  if ($('.prompt3').css('display') === 'none'){
    $('.prompt3').css('display','block');
  }
  else {
    $('.prompt3').css('display','none');
  }
}
function prompt4(){
  if ($('.prompt4').css('display') === 'none'){
    $('.prompt4').css('display','block');
  }
  else {
    $('.prompt4').css('display','none');
  }
}
function prompt5(){
  if ($('.prompt5').css('display') === 'none'){
    $('.prompt5').css('display','block');
  }
  else {
    $('.prompt5').css('display','none');
  }
}
function prompt6(){
  if ($('.prompt6').css('display') === 'none'){
    $('.prompt6').css('display','block');
  }
  else {
    $('.prompt6').css('display','none');
  }
}
function prompt7(){
  if ($('.prompt7').css('display') === 'none'){
    $('.prompt7').css('display','block');
  }
  else {
    $('.prompt7').css('display','none');
  }
}

function button1(){
  $button1.button()
  $button1.css("font-size", "25px");
  $button1.css("margin", "20px");
  $button1.css("margin-left", "55px");
  $button1.css("border-radius", "40%");
  $button1.css(  "background-color", "white");
  $button1.css(  "color", "black");
  $button1.css(  "border", "7px solid #6c07ab");
  $button1.on('click', prompt1);
}

function button2(){
  $button2.button()
  $button2.css("font-size", "25px");
  $button2.css("margin", "20px");
  $button2.css("border-radius", "40%");
  $button2.css(  "background-color", "white");
  $button2.css(  "color", "black");
  $button2.css(  "border", "7px solid #6c07ab");
  $button2.on('click', prompt2);
}

function button3(){
  $button3.button()
  $button3.css("font-size", "25px");
  $button3.css("margin", "20px");
  $button3.css("border-radius", "40%");
  $button3.css(  "background-color", "white");
  $button3.css(  "color", "black");
  $button3.css(  "border", "7px solid #6c07ab");
  $button3.on('click', prompt3);
}

function button4(){
  $button4.button()
  $button4.css("font-size", "25px");
  $button4.css("margin", "20px");
  $button4.css("border-radius", "40%");
  $button4.css(  "background-color", "white");
  $button4.css(  "color", "black");
  $button4.css(  "border", "7px solid #6c07ab");
  $button4.on('click', prompt4);
}

function button5(){
  $button5.button()
  $button5.css("font-size", "25px");
  $button5.css("margin", "20px");
  $button5.css("border-radius", "40%");
  $button5.css(  "background-color", "white");
  $button5.css(  "color", "black");
  $button5.css(  "border", "7px solid #6c07ab");
  $button5.on('click', prompt5);
}

function button6(){
  $button6.button()
  $button6.css("font-size", "25px");
  $button6.css("margin", "20px");
  $button6.css("border-radius", "40%");
  $button6.css(  "background-color", "white");
  $button6.css(  "color", "black");
  $button6.css(  "border", "7px solid #6c07ab");
  $button6.on('click', prompt6);
}
function button7(){
  $button7.button()
  $button7.css("font-size", "25px");
  $button7.css("margin", "20px");
  $button7.css("border-radius", "40%");
  $button7.css(  "background-color", "white");
  $button7.css(  "color", "black");
  $button7.css(  "border", "7px solid #6c07ab");
  $button7.on('click', prompt7);
}
