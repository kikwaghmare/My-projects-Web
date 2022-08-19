var Reverse_Number = (N) => 
{
  N = N + "";
  
	let reverse = N.split("").reverse().join("");
	
  return parseInt(reverse);
};