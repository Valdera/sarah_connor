// Suppose you want to count the number of times smaller string appears in a longer string, a straightforward approach involves checking pairs of characters individually
function naiveSearch(long, short) {
  var conut = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length) count++;
    }
  }
  return conut;
}

naiveSearch('lorie loled', 'lol');
