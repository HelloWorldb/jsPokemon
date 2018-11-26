function fact(n){
    if(n<=1) return 1;
    return n*fact(n-1);
}
//for(var i=1; i<10; i++){
 //   console.log(i+"! = "+ fact(i));
//}
console.log(Math.sqrt(2));
console.log(fact(130))

var sym1 = Symbol("mypet1")
var sym2 = Symbol("mypet2")
console.log(sym1.toString())

var card ={"mine":"Spade A","yours":"Spade B"};
card["third"] = "Spade 9";
console.log(card);
var a=new Date();
console.log('${a.getDate()}');
//console.log("${card["mine"]}");
delete card["third"];
console.log(card);