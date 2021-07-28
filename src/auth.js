let key = "";

/** fetches the current key  */
function getKey() {
  return key;
}

function checkKey() {
  console.log(key != "");
  return key != "";
}

function setKey(k) {
  key = k;
}

export default { getKey, checkKey, setKey };
