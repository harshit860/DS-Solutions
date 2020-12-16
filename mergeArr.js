const { type } = require("os")


const mergeSortedArray = (arr1,arr2) => {
  const arrans = []
  let itr = 0
  let itr2 = 0
  while(itr <= arr1.length-1 || itr2 <= arr2.length-1)
  {
    if(arr2[itr2] > arr1[itr])
    {
      arrans.push(arr1[itr])
      itr++;
    }
    else
    {
      arrans.push(arr2[itr2])
      itr2++;
    }
  }

  console.log(arrans)

  
}

mergeSortedArray([2,5,6,9], [1,2,3,29]);