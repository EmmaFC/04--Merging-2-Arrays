let firstArray = document.getElementById("first_array");
let secondArray = document.getElementById("second_array");

document.getElementById("array_inputs").addEventListener("keyup", () => {
    let arrayResult = firstArray.value + secondArray.value;
    console.log("First Array: " + firstArray.value);
    console.log("Second Array: " + secondArray.value);
    console.log("Merged Array: " + arrayResult);
    document.getElementById("merged_arrays").innerHTML = arrayResult;
});