var Perfect_Check = (N) => 
{
  let count=0
  for(let i=1;i<=N/2;i++)
  
  {
    if(N%i==0)
    count+=i
  }
  
  if(count==N && count<N)
  return "YES"
  else
  return "NO"
        
};