function Check(obj1) {
    delete obj1.rollno
    if(obj1.hasOwnProperty('rollno'))
    {
      return "True"
    }
    else
    {
      return "False"
    }
}