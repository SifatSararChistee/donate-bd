function inputFieldValueById(id) {
  const inputAmount = document.getElementById(id).value;
  const stringToNumber = parseFloat(inputAmount);
  return stringToNumber;
}

function getInnerTextById(id) {
  const textOfId = document.getElementById(id).innerText;
  const stringToNumber = parseFloat(textOfId);
  return stringToNumber;
}
