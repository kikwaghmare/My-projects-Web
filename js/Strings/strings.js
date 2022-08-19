// 1.Count Characters


const countCharacters = (S) => {
    var B = [2];
    let countA = 0;
    let countD = 0;
    let i;
    for (i = 0; i < S.length; i++) {
      if (S[i] === "A") {
        countA += 1;
      } else if (S[i] === "D") {
        countD += 1;
      }
    }
    B[0] = countA;
    B[1] = countD;
    return B;
  };
   
  
  // 2.Count the Heads
  
  var Count_Occ = (s) => 
  {
      
      let Arr = s.split("").sort();
      var p;
      let map1 = new Map();
      for(let i =0; i<Arr.length;i++)
      {
        p=0;
        Arr.reduce((acc,val)=>
        {
          if(val == Arr[i])
          {
            p=acc+1;
          }
          return p;
        }, 0);
        map1.set(`${Arr[i]}` , p);
      }
      let z = [];
      map1.forEach((value,key)=>
      {
      if(value>1)
      {
        z.push(key + "" + value);
      }
      
      });
      return (z.join(""));
  };
  
  // 3.Count the Vowels
  
  
  var Count_Vowels= (S) => 
  {
        S=S.toUpperCase();
        let count=0
        let i
        for(i=0;i<S.length;i++){
          if(S[i]=='A' || S[i]=='E' || S[i]=='O' || S[i]=='I' || S[i]=='U'){
            count+=1
          }
        }
        return count
  };
   
  
  // 4.Concatenate the Strings
  
  var Concatenate_Strings = (S1, S2) => 
  {
        var str=''
        str=S1+S2
        return str
  };
  
  // 5.Find Length
  
  const findLength = (S) => 
  {
    let len=0
    while(S[len]!==undefined){
      len++
    }
      return len
  };
  
  // 6.Find the Winner
   
  var Game_Winner = (S) => 
  {
    let CountA=0,CountD=0
    for(let i=0;i<S.length;i++){
      if(S.charAt(i)=='A'){
        CountA+=1
      }
      if(S.charAt(i)=='D'){
        CountD+=1
      }
    }
    if(CountA > CountD){
      return 'Aditya'
    }
    else if(CountA<CountD){
      return 'Danish'
    }
    else{
      return 'Draw'
    }
  }
  
  // 7.Join Strings
  
  
  const joinStrings = (S, P) => 
  {
      let str=''
      str=S+P
      return str
      
  };
  
  
  // 8.Plaindrome Check
  
   
  var Palin_Check = (str) =>
  {
       var i = 0, j = str.length - 1
   
          while (i < j) {
   
                  if (str.charAt(i) != str.charAt(j))
                  return "False"
           i++
              j--
          }
          return "True"
       
  }
  
  // 9.Reverse the String
  
  
  var Reverse_String = (str) => 
  {
       return str.split("").reverse().join("")
  };
  
  //10. Match the Strings
  var String_Match = (S1,S2) => 
  {
        if(S1==S2){
          return 'YES'
        }
        else{
          return 'NO'
        }
  };
  
  // 11.String Replace
  
  
  var Replace = (S, pattern , text) => 
  {
        return S.replace(pattern,text)
  };
  
  // 12.Split the String
  
  var Split_the_string = (S) => 
  {
    let text=S.split(" ")
    return text
          
  };
  
  // 13. Count the Vowels and Consonants
  
  var Count_Vowels= (S) => 
  {
       S=S.toUpperCase();
        let countV=0
        let i
        for(i=0;i<S.length;i++){
          if(S[i]=='A' || S[i]=='E' || S[i]=='O' || S[i]=='I' || S[i]=='U'){
            countV+=1
          }
        }
        return countV
  };
  var Count_Consonants= (S) => 
  {
         S=S.toUpperCase();
        let countV=0
        let countC=0
        let i
        for(i=0;i<S.length;i++){
          if(S[i]=='A' || S[i]=='E' || S[i]=='O' || S[i]=='I' || S[i]=='U'){
            countV+=1
          }
          else{
            countC+=1
          }
        }
        return countC
  };