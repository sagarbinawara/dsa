N = 5;
let a = [2, 1, 3, 2, 3];

function x(a, N) {
  // a.sort();
  // let p = [];
  // for (let i = 0; i < N; i++) {
  //   if (a[i] == a[i + 1]) {
  //     p.push(a[i]);
  //   }
  // }

  // if(p.length == 0){
  //   return -1
  // }else{
  //   return p
  // }

  // let myarr = [];
  // for (let i = 0; i < N; i++) {
  //   let m = a[i];
  //   let n = a[Math.abs(m) - 1];

  //   if (n < 0) {
  //     if(!myarr.includes(m)){
  //       myarr.push(Math.abs(m));
  //     }

  //   }else{
  //     a[Math.abs(m)-1] = -n
  //   }
  //   console.log(n)
  //   console.log(myarr)
  // }

  // // console.log(myarr)
  // if(myarr.length == 0){
  //   return -1
  // }else{
  //   return myarr
  // }

  let xx = {};
  let y = [];
  for (let i = 0; i < N; i++) {
    let m = a[i];
    // console.log(x[m])
    if (xx[m] === undefined) {
      xx[m] = 1;
    } else {
      xx[m] += 1;

      if (!y.includes(m)) {
        y.push(m);
      }
    }
  }
  if(y.length==0){
    return -1
    
}
return y;
  
}

console.log(x(a, N))
