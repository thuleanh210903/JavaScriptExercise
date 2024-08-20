function range(start, end, step = 1) {
    let array = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
    }
    return array;
}

function sum(array) {
    let total = 0;
    for (let num of array) {
        total += num;
    }
    return total;
}


function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}


function reverseArrayInPlace(array) {
    let left = 0;
    let right = array.length - 1;
    
    while (left < right) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        
        left++;
        right--;
    }
    return array; // Optional, as the array is modified in place
}



