
/**
 * @param {list_int32} arr
 * @param {int32} target
 * @return {list_list_int32}
 */
function generate_all_combinations(arr, target) {
    // Write your code here.
    const result = [];
  arr.sort();

  function backtracking(cur, pos, target) {
    if (target === 0) {
      return result.push([...cur]);
    }
    if (target <= 0) {
      return;
    }

    let previous = -1;
    for (let i = pos; i < arr.length; i++) {
      if (previous == arr[i]) continue;
      cur.push(arr[i]);
      backtracking(cur, i + 1, target - arr[i]);
      cur.pop();

      previous = arr[i];
    }
  }

  backtracking([], 0, target);
  return result;
}
