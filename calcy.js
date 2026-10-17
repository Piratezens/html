const user_name = document.getElementById("name");
const user_email = document.getElementById("email");
const user_score = document.getElementById("score");
const result = document.getElementById("result");

submit=()=>{
    if (!user_name || !user_email || !user_score || !result) {
        console.error("One or more required elements are missing in the page.");
        return;
    }
    let grade;
    let Score = Number(user_score.value);
    if (Score<40){
        grade="fail";
        result.style.color = "red";
    }
    else if (Score>=40 && Score<60){
        result.style.color = "blue";
        grade="pass";
    }
    else{
        result.style.color = "green";
        grade="distinction";
    }


    const output = `Name: ${user_name.value} <br> Email: ${user_email.value} <br> Score: ${user_score.value} <br> Grade: ${grade}`;
    result.innerHTML = output;
}