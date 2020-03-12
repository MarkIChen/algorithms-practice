function reverse(s){
  var newString = "";

  helper(s);
  function helper(temp) {
    newString = newString.concat(temp.charAt(temp.length-1));
    if(temp.length > 1) {
      helper(temp.substr(0, temp.length-1));
    }
  }
  return newString;
}

function reverseWithPureRecursion(s) {
  var newString = "";

  newString = s.charAt(s.length-1);

  if(s.length > 1) {
    newString = newString.concat(reverseWithPureRecursion(s.substr(0, s.length-1)));
  }

  return newString;
}

console.log(reverseWithPureRecursion('awesome'));
