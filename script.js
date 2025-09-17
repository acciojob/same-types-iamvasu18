function isSameType(value1, value2) {
  //your js code here
	if (!isNaN(value1) && value1.trim() !== "") value1 = Number(value1);
  if (!isNaN(value2) && value2.trim() !== "") value2 = Number(value2);

  // Special case: check for NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Compare types
  return typeof value1 === typeof value2;
}

}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

alert(isSameType(value1, value2));
