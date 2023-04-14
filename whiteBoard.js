// // promt 2 - remove duplicates from array
// // cannot use filter method

const dedupe = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
}

const dedupeEdge = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// // with recursion

function dedupeRecursion(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const [first, ...rest] = arr;
  const dedupedRest = dedupeRecursion(rest);
  if (!dedupedRest.includes(first)) {
    return [first, ...dedupedRest];
  }
  return dedupedRest;
}
