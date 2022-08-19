var Substring_Check = (S1, S2) => 
{
  
  let string = S1.split(" ");
  let count = 0;
  for(let i=0 ;i<string.length;i++)
    if(string[i] === S2)
      count++;
  if(count > 0)
    return "YES"
  else
    return "NO"

};