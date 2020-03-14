function isPalindrome(string) {

  if(string.length == 1) {
    return true;
  }

  if(string[0] !== string.slice(-1)) {
    return false;
  }

  return isPalindrome(string.slice(1, -1));
}

console.log(isPalindrome("tacocat"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));
