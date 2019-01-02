function diamond(c,n,x,y,r,color){
    var p = generatePoints(n,x,y,r);
    c.strokeStyle = color;
    c.globalAlpha = 0.3;
    c.beginPath();
    for(var i=0; i<n;i++){
        for(var j= i+1; j<n;j++){
            c.moveTo(p[i].x,p[i].y);
            c.lineTo(p[j].x,p[j].y);
        }
    }
    c.stroke();
}
function generatePoints(n,x,y,r){
    var points =[];
    for(var i=0;i<n;i++){
        var t=i*2*Math.PI /n;
        points[i]={
            x:x+r*Math.cos(t),
            y:y+r*Math.sin(t)
        };
    }
    return points;
}
window.onload = function(){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    diamond(ctx,6,170,170,150,'darkblue');
    diamond(ctx,12,490,170,150,'darkblue');
    diamond(ctx,18,810,170,150,'red');

};