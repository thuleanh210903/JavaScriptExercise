function outside() {
    var x = 10

    function inside() {
        // console.log(x+10)
    }

    return inside
}
//inside can not call object argument of outside function, although it can use parameters of outside functuon



//execution context: ngu canh thuc thi
var x = 10;
function foo(a) {
  var b = 20;

  function bar(c) {
    var d = 30;
    return boop(x + a + b + c + d);
  }

  function boop(e) {
    return e * -1;
  }

  return bar;
}

var moar = foo(5); // Closure  
moar(15); 

