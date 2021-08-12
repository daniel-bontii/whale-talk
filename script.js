const input = 'a whale of a deal!';

const vowels = ['a', 'e', 'i', 'o', 'u']

const resultArray  = [];

for(let i = 0; i < input.length; i++){
  //console.log(`${input[i]} is at position ${[i]}`);
  for(let j = 0; j<vowels.length; j++){
    //console.log(`${vowels[j]} is at position ${j};`);
    if(input[i] === vowels[j]){
      resultArray.push(input[i]);
    }
  }
  if(input[i] === 'e'){
    resultArray.push(input[i]);
  }
  if(input[i] === 'u'){
    resultArray.push(input[i]);
  }
}
//console.log(resultArray);

console.log(`${input} in whale ${resultArray.join('').toUpperCase()}`);