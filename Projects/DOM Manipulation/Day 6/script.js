let students = [

    {
        name:"Pranaya",city:"Pokhara",age:21,totalMarks:345
    },
    {
        name:"Sujan",city:"Kathmandu",age:23,totalMarks:200
    },
    {
        name:"Sanskar",city:"Palpa",age:24,totalMarks:300   
    },
    {
        name:"Susan",city:"Jhapa",age:19,totalMarks:289
    },
    {
        name:"Anjel",city:"Baglung",age:27,totalMarks:350
    },
    {
        name:"Sudip",city:"Gorkha",age:22,totalMarks:278
    },
    {
        name:"Urnib",city:"Butwal",age:28,totalMarks:345
    },
    {
        name:"Ritik",city:"Pokhara",age:21,totalMarks:345
    },
    {
        name:"Saif",city:"Kathmandu",age:23,totalMarks:200
    },
    {
        name:"Ramu",city:"Palpa",age:24,totalMarks:300   
    },
    {
        name:"Saurab",city:"Jhapa",age:19,totalMarks:289
    },
    {
        name:"Bisesh",city:"Baglung",age:27,totalMarks:350
    },
    {
        name:"Sammy",city:"Gorkha",age:22,totalMarks:278
    },
    {
        name:"John",city:"Butwal",age:28,totalMarks:345
    },
    {
        name:"Pandu",city:"Pokhara",age:21,totalMarks:345
    },
    {
        name:"Gandu",city:"Kathmandu",age:23,totalMarks:200
    },
    {
        name:"Sandu",city:"Palpa",age:24,totalMarks:300   
    },
    {
        name:"Jire",city:"Jhapa",age:19,totalMarks:289
    },
    {
        name:"Bijay",city:"Baglung",age:27,totalMarks:350
    },
    {
        name:"Sailesh",city:"Gorkha",age:22,totalMarks:278
    },
    {
        name:"Slok",city:"Perth",age:28,totalMarks:345
    },
    {
        name:"Pan",city:"London",age:28,totalMarks:345
    },
    {
        name:"Pandu",city:"Pokhara",age:21,totalMarks:345
    },
    {
        name:"Gandu",city:"Kathmandu",age:23,totalMarks:200
    },
    {
        name:"Sandu",city:"Palpa",age:24,totalMarks:300   
    },
    {
        name:"Jire",city:"Jhapa",age:19,totalMarks:289
    },
    {
        name:"Bijay",city:"Baglung",age:27,totalMarks:350
    },
    {
        name:"Sailesh",city:"Gorkha",age:22,totalMarks:278
    },
    {
        name:"Slok",city:"Perth",age:28,totalMarks:345
    },
    {
        name:"Pan",city:"London",age:28,totalMarks:345
    }
]
let filterStudents = students;

let noOfPages = Math.ceil(students.length/8);
let currentPage=1;

// logic for generating 
for(let i=1;i<=noOfPages;i++)
{
    let btn = document.createElement("button");
    btn.innerText=i;

    btn.addEventListener("click",function(){
       currentPage=i;
        paginate(currentPage);
    })
    document.getElementById("nums").appendChild(btn)
}

document.getElementById("next")
.addEventListener("click",function(){
    if(currentPage<noOfPages)
    {
    currentPage++;
    paginate(currentPage);
    }

})
document.getElementById("prev")
.addEventListener("click",function(){
    if(currentPage>1)
    {
    currentPage--;
    paginate(currentPage);
    }

})


document.getElementById("search")
.addEventListener("keyup",function(){

    let val = document.getElementById("search").value;

    filterStudents = students.filter(function(student){
        return student.name.includes(val);
    })
    
    currentPage=1;
    paginate(1);
})

// initial call
paginate(1);

function paginate(pageNumber)
{
let startIndex = (pageNumber-1)*8;
let endIndex = startIndex+8;
let paginatedData = filterStudents.slice(startIndex,endIndex);
document.getElementById("info").innerText=currentPage+" of "+noOfPages

document.getElementById("tbody").innerHTML="";

for(i=0;i<paginatedData.length;i++)
{
    let row = document.createElement("tr");

let noTd = document.createElement("td");
noTd.innerText=startIndex+i+1;

let nameTd = document.createElement("td");
nameTd.innerText=paginatedData[i].name;

let ageTd = document.createElement("td");
ageTd.innerText=paginatedData[i].age;

let cityTd = document.createElement("td");
cityTd.innerText=paginatedData[i].city;

let tmTd = document.createElement("td");
tmTd.innerText=paginatedData[i].totalMarks;

row.append(noTd,nameTd,ageTd,cityTd,tmTd);

document.getElementById("tbody").appendChild(row);
}
}
