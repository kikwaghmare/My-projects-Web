//Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

const res1= studentRecords.map(x=>x.name.toUpperCase());
console.log(res1);

//Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

const res2= studentRecords.filter(x=>x.marks>50);
console.log(res2);

//Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120. 

const res3= studentRecords.filter(x=>x.marks>50 && x.id>120);
console.log(res3);

//Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

const res4= studentRecords.reduce((acc,curr)=>acc+=curr.marks,0)
console.log(res4)

//Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let res5=studentRecords.filter(y=>y.marks>50);
console.log(res5.map(a=>a.name));

//Question 6: This time we are required to print the sum of marks of the students with id > 120.

const students=studentRecords.filter(b=>b.id>120).reduce((acc,cur)=>acc+=cur.marks,0)
console.log(students);

//Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let res6 = studentRecords.map (function(mark){
                if(mark.marks < 50){
                    mark.marks +=15
                };
                return mark;
            }).filter(c=>c.marks>50).reduce((acc,cur)=>acc+=cur.marks,0)
    console.log(res6);

//Question 8: Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 
    
function Student(name,rollno,cls) {
    this.name=name;
    this.rollno=rollno;
    this.cls=cls;
   
}
let student1= new Student ("ABC",001,12);
let student2= new Student("DEF",002,12);
let student3= new Student ("GHI",003,12);
let student4= new Student ("JKL",004,12);
let student5= new Student ("MNO",005,12);
let student6= new Student ("PQR",006,12);

console.log(student1,student2,student3,student4,student5,student6);
Footer
© 2022 G