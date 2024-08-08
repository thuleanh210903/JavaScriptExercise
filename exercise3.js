
function isEven(n) {
    if (n < 0) {
      return isEven(-n);
    }
    if (n === 0) {
      return true; 
    }
    if (n === 1) {
      return false; 
    }
    return isEven(n - 2); 
  }
  



function countChar(string, char) {
    let count = 0
    for(let i = 0; i<string.length; i++) {
        if(string[i] === char) {
            count++;
        }
    }

    return count;
}

function countB(string) {
    return countChar(string, 'B')
}

console.log(countB("BBB"))
console.log(countChar("àdsfsgdfg", "f"))
  

  