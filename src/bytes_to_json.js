const appDiv = document.getElementById('app');

// Converter Byte-Array to JSON (Reverse Feature)
const the_byte_array = [
    // array code
]

let string_from_array = String.fromCharCode.apply(String,the_byte_array);
let bring_obj_back = JSON.parse(string_from_array);
appDiv.innerHTML = string_from_array;
