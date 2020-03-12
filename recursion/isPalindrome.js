function isPalindrome(string) {
  if(string.charAt(0) !== string.charAt(string.length - 1)) {
    return false;
  }

  isPalindrome(string.substr(1, string.length-1));
  return true;
}

console.log(isPalindrome("tacocat"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));
