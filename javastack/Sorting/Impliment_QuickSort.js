
/**
 * @param {list_int32} arr
 * @return {list_int32}
 */
function quick_sort(arr, left = 0, right = arr.length - 1) {
    function swap(arr, leftIndex, rightIndex) {
      let temp = arr[leftIndex];
      arr[leftIndex] = arr[rightIndex];
      arr[rightIndex] = temp;
    }
  
    function partition(arr, left, right) {
      let pivot = arr[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
      while (i <= j) {
        while (arr[i] < pivot) {
          i++;
        }
        while (arr[j] > pivot) {
          j--;
        }
        if (i <= j) {
          swap(arr, i, j); //sawpping two elements
          i++;
          j--;
        }
      }
      return i;
    }
  
    let index;
    if (arr.length > 1) {
      index = partition(arr, left, right); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
        quick_sort(arr, left, index - 1);
      }
      if (index < right) { //more elements on the right side of the pivot
        quick_sort(arr, index, right);
      }
    }
    return arr;
  }