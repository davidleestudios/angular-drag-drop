require("./dragular.css");

var Angular = require("angular");

Angular.module("dragular", [
  require("angular-drag-drop").name,
  
  require("controllers/game").name,
])


;