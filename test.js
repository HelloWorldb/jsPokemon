var card ={"mine":"Spade A","yours":"Spade B"};
card["third"] = "Spade 9";
console.log(card);
var a=new Date();
console.log('${a.getDate()}');
//console.log("${card["mine"]}");
delete card["third"];
console.log(card);