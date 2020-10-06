import Buffer from 'buffer'

const appDiv = document.getElementById('app');
const formSelector = document.getElementById('formSelector');
const convertTo = document.getElementById('convert-to')
const convertFrom = document.getElementById('convert-from')
// Converter JSON to Byte
const obj = {}
    // json code


const changeText=()=>{
    const splittedValue=formSelector.value.split('-');
    console.log("changeText -> formSelector", formSelector)
    convertTo.innerHTML=splittedValue[1];
    convertFrom.innerHTML=splittedValue[0]
}
changeText()
formSelector.addEventListener('change',changeText)

let bufferOne = Buffer.from(JSON.stringify(obj));
let byte = JSON.stringify(bufferOne);
appDiv.innerHTML = byte;
