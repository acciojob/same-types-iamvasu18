function isSameType(value1, value2) {
  //your js code here
  if (typeof value1 === "string" && value1.trim() === "NaN") value1 = NaN;
  if (typeof value2 === "string" && value2.trim() === "NaN") value2 = NaN;

  // If both are actual NaN values -> true
  if (Number.isNaN(value1) && Number.isNaN(value2)) return true;

  // Try converting numeric-looking strings to numbers so "3" and 3 count as same type (number)
  const tryConvert = x => {
    if (typeof x !== "string") return x;
    if (x.trim() === "") return x;              // keep empty string as string
    const n = Number(x);
    return Number.isNaN(n) ? x : n;
  };

  value1 = tryConvert(value1);
  value2 = tryConvert(value2);

  // Check NaN again after any conversion
  if (Number.isNaN(value1) && Number.isNaN(value2)) return true;

  // Finally compare types
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

alert(isSameType(value1, value2));
