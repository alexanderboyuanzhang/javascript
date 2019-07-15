function vowelsAndConsonants(s) {
  var len = s.length
  for (var i = 0; i < len; i++)
    if (isVowel(s.charAt(i)))
      console.log(s.charAt(i));
  for (var i = 0; i < len; i++)
    if (!isVowel(s.charAt(i)))
      console.log(s.charAt(i));
}

function isVowel(x) {
  return ("aeiouAEIOU".indexOf(x) != -1);
}
vowelsAndConsonants("javascriptloops")