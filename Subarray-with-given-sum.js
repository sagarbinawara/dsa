const n = 5, s = 15
const arr =[1, 2, 3, 7, 5]

function subarraySum()
    {
        
        let l = 0
        let r = 0
        let sum = 0
        for (let i = 0 ; i<n; i++){


            if(sum< s){
                sum = sum + arr[i]
                r = r+1
                
            }else{
                if(sum>s){
                    sum = sum- arr[l]
                    l = l+1
                    
                }else{
                    break;
                    
                }
            }
            
        }
        
        
        if(sum==0){
            return -1
        }else{
            return [l+1, r]
        }
    }

console.log(subarraySum())