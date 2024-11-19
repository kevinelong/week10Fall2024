
const rawString = `[{"name":"apple","price":1.99},{"name":"banana","price":0.49}]`;
console.log(rawString.length);

const cookedBinaryData = JSON.parse(rawString); // TEXT to Binary Data

console.log(cookedBinaryData.find(f=>f.name==="banana").price);
console.log(cookedBinaryData[1].price);

cookedBinaryData.push({name:"cherry", price: 3.99});

const rawTextOutput = JSON.stringify(cookedBinaryData); // Binary data to TEXT
console.log(rawTextOutput.length, rawTextOutput);