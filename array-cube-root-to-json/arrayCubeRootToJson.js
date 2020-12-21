const arrayCubeRootToJson = (arr) => {
  try {
    if (! Array.isArray(arr)){
      throw "Please pass a valid array";;
    }
    if (arr.length == 0){
      throw "array should not be empty";
    }
    let result = {};
    arr.forEach((element) => {
      if (isNumber(element)) {
        result[element] = Math.cbrt(element);
      } else {
        throw "element is not a number";
      }
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

let isNumber = (letter) => {
  if(letter == Infinity){
    return true
  } else {
    return Number.isInteger(parseInt(letter));
  }
};

// not able to preserve the order

//console.log(arrayCubeRootToJson(['27', '64', '125', 1]));

module.exports = arrayCubeRootToJson;
