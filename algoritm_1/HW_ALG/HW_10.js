function quickSort(arr) {
    if (arr.length <= 1) {
      return arr
    }
    
    const pivotIndex = Math.floor(arr.length / 2)
    const pivot = arr.splice(pivotIndex, 1)[0]
    const left = []
    const right = []

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
  
    return quickSort(left).concat([pivot], quickSort(right))
  }
  
  let arr = [8, 9, 2, 3, 2, 8, 1, 6, 3, 7, 2, 1];
  console.log(quickSort(arr)); // [1, 1, 2, 2, 2, 3, 3, 6, 7, 8, 8, 9]