
const findEvenOdd = (N, Arr) => 
{
    let odd = 0;
    let even = 0;
    let p=[2];
    for(let i=0; i<N; i++){
      if(Arr[i]%2 == 0){
        even=even+Arr[i];
      }
      else{
        odd=odd+Arr[i];
      }
    }
    p[0]=even;
    p[1]=odd;
    return p;
    
};
 
