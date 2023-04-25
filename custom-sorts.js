function ageSort(users) {
  // Your code here
  users.sort((a, b) => a.age - b.age);
  return users;
}

function oddEvenSort(arr) {
  // Your code here
  arr.sort((a, b) => {
    let modA = a % 2;
    let modB = b % 2;
    if (modA === modB) {
      return a - b;
    } else {
      return modB - modA;
    }
  });
  return arr;
}

function validAnagrams(s, t) {
  // Your code here
  if (s.length !== t.length) {
    return false
  }
  let arrS = s.split("");
  let arrT = t.split("");
  let compareFn = function(charA, charB) {
    return charA.charCodeAt() - charB.charCodeAt();
  }
  arrS.sort(compareFn);
  arrT.sort(compareFn);
  return arrS.join("") === arrT.join("");
}

function reverseBaseSort(arr) {
  // Your code here
  let compareFn = function(numA, numB) {
    let baseA = String(numA).length;
    let baseB = String(numB).length;
    if (baseA === baseB) {
      return numA - numB;
    } else {
      return baseB - baseA;
    }
  }
  arr.sort(compareFn);
  return arr;
}

function frequencySort(arr) {
  // Your code here
  let freq = {};
  arr.forEach(num => {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  });
  arr.sort((a, b) => {
    if (freq[a] !== freq[b]) {
      return freq[a] - freq[b];
    } else {
      return b - a;
    }
  });
  return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];