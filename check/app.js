// this code has two parts, one workings well and other dosen't 

// //Not working well

// //Budget CONTROLLER
// var budgeController =( function(){

// })();

// // UI CONTROLLER
// var UIController = (function () {

//   var AccessClasses = {
//   aType: ".add__type",
//   aText: ".add__description",
//   aNumber: ".add__value",
//   addBtn: ".add__btn",
// };

//   var AccessInput = {
//     type: document.querySelector(AccessClasses.aType).value,
//      text: document.querySelector(AccessClasses.aText).value,
//      number: document.querySelector(AccessClasses.aNumber).value,
//  };

//   return {  
//   //Exposed AccessClasses method
//   getClasses: function(){
//      return AccessClasses;
//   },
//  //Exposed Accessinput method
//   getInputs: function(){
//       return AccessInput;
//    }

// };

// })();


// // APP GLOBLE CONTROLLER
// var controller = (function (budgeCont, UICont) {

// //SETUP EVENT-LISTENERS IN ONE FUN
// var setupEventListeners = function(){
//   var UIClasses = UICont.getClasses();  
// document.querySelector(UIClasses.addBtn).addEventListener("click", addItems);

// document.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     addItems();
//   }
// });

// };

// //ADD DATA
// var addItems = function () {
//   //VARIABLES
//   var input;
  
//   //TAKE USER TYPED INPUT  
//   input = UICont.getInputs();
//   //To check what user input
//   console.log(input);   

// };

// // INIT FUNCTION
// return{
//   init: function(){
//     setupEventListeners();
//     console.log("started");
//   }
// };

// })(budgeController, UIController);

// controller.init();





//WORKING WELL

//Budget CONTROLLER
var budgeController =( function(){

})();

// UI CONTROLLER
var UIController = (function () {

  var AccessClasses = {
  aType: ".add__type",
  aText: ".add__description",
  aNumber: ".add__value",
  addBtn: ".add__btn",
};

  return {  
    getInputs : function() {
      return{
      type: document.querySelector(AccessClasses.aType).value,
       text: document.querySelector(AccessClasses.aText).value,
       number: document.querySelector(AccessClasses.aNumber).value,
      };
    },

  //Exposed AccessClasses method
  getClasses: function(){
     return AccessClasses;
  }
 //Exposed Accessinput method
  // getInputs: function(){
  //     return AccessInput;
  //  }

};



})();


// APP GLOBLE CONTROLLER
var controller = (function (budgeCont, UICont) {

//SETUP EVENT-LISTENERS IN ONE FUN
var setupEventListeners = function(){
  var UIClasses = UICont.getClasses();  
document.querySelector(UIClasses.addBtn).addEventListener("click", addItems);

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addItems();
  }
});

};

//ADD DATA
var addItems = function () {
  //VARIABLES
  var input;
  
  //TAKE USER TYPED INPUT  
  input = UICont.getInputs();
  //To check what user input
  console.log(input);   

};

// INIT FUNCTION
return{
  init: function(){
    setupEventListeners();
    console.log("started");
  }
};

})(budgeController, UIController);

controller.init();