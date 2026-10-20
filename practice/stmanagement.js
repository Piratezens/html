document.getElementById("name").innerHTML = "<span>Name: Aanand Sah</span>";
document.getElementById("id").innerHTML = "<span>Student ID: 2023A3PS0001H1</span>";
const student_data=[
    {
        name:"Aanand Sah",
        id:"1001",
        score:98
    }
    ,
    {
        name:"deepan",
        id:"1002",
        score:100
    }
    ,
    {
        name:"Abhinit",
        id:"1003",
        score:99

    },
    {
        name:"Aman",
        id:"1004",
        score:96
    }
];
let student=
{
    username:"",

    id:"",
    score:""
    
    

};

function submit() {
    student.id = Number(document.getElementById("std_id").value);
    for(let std of student_data){
        if(std.id==student.id){
            student.username=std.name;
            student.id=std.id;
            student.score=std.score;

            break;
            
        }
    }

    document.getElementById("input").style.display = "none";
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";


    document.getElementById("result").style.visibility = "visible";
document.getElementById("name").textContent = "Name: " + student.username;
document.getElementById("id").textContent = "Student ID: " + student.id;
document.getElementById("score").textContent = "Score: " + student.score;

}
