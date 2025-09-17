function isSameType(value1, value2) {
  //your js code here
   if (value1 === "NaN") value1 = NaN;
  if (value2 === "NaN") value2 = NaN;

  // If either is NaN, return true only if both are NaN
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    return Number.isNaN(value1) && Number.isNaN(value2);
  }

  // Otherwise, just check types
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

alert(isSameType(value1, value2));
