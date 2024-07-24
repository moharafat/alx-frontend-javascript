export default function appendToEachArrayValue(array, appendString) {
  const TheBigArray = [];
  for (const idx of array) {
    TheBigArray.push(appendString + idx);
  }

  return TheBigArray;
}
