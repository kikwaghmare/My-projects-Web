const findCount = (N, K, Arr) => 
{
    var count = 0; 
    for (let i=0; i<N; i++){
      if (Arr[i] === K){
        count += 1;
      }
    }
    return count;
};