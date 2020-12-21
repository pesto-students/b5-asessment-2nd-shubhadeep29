function balancedBraces(args) {
  let bracesArr = [];
  for (const currentValue of args.split('')) {
    if(currentValue === "(" || currentValue === "{" || currentValue === "[") {
      bracesArr.push(currentValue)
    }
    if(currentValue === ")" || currentValue === "}" || currentValue === "]") {
      let lastBrace = bracesArr[bracesArr.length - 1];
      if ((lastBrace === "(" && currentValue === ")") || (lastBrace === "[" && currentValue === "]") || (lastBrace === "{" && currentValue === "}")) {
        bracesArr.pop()
      } else {
        bracesArr.push(currentValue)
      }
    }
  }
  if (bracesArr.length === 0) {
    return true
  } else {
    return false
  }
}

export {
  balancedBraces,
};
