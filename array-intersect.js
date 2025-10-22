function getIntersection(arr1: any[], arr2: any[]): any[] {
  // your code here
  const answer = [];
  const map = new Map();
  for (const elt of arr1) {
    if (!map.has(elt)) map.set(elt, 0);
    map.set(elt, map.get(elt) + 1);
  }

  for (const elt of arr2) {
    if (map.has(elt) && map.get(elt) > 0) {
      answer.push(elt);
      map.set(elt, 0);
    }
  }

  return answer;
}
