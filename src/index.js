const appDiv = document.getElementById('app');

// Converter JSON to Byte
const obj = {
    // json code
}

let bufferOne = Buffer.from(JSON.stringify(obj));
let byte = JSON.stringify(bufferOne);
appDiv.innerHTML = byte;
