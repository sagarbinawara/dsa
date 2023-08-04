let arr   = [1,4,5,6,7]

function ReverseArray(arr, n){
     for  (let i = 0;i<n/2;i++){
        let z = arr[i]
        arr[i] = arr[n-(i+1)]
        arr[n-(i+1)] = z
     }

}

ReverseArray(arr, 5)