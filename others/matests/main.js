let text = document.getElementById("test");

text.appendChild(document.createTextNode("I am Mike the greatest coder"));
// testing spread operator
let sum = (...numbers) => {
    return numbers.reduce((a, b) => a+b);
};

let j = sum(1,2,3,4,5,6,7,8,9);

console.log(j);


//testing gather operator
let mul = (multiplier, ...nums) => {
    return nums.map(num => multiplier*num);
}




j = mul(2,1,2,3,4,5,6,7,8,9,10);
j.push(11,12,13,14,15,25) ;


let k = j.filter((no) => (no > 10) );

k = k.sort();



console.log(j);
console.log(k);