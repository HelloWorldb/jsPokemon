var card ={"mine":"Spade A","yours":"Spade B"};
card["third"] = "Spade 9";
console.log(card);
var a=1;
console.log('${a}');
//console.log("${card["mine"]}");
delete card["third"];
console.log(card);