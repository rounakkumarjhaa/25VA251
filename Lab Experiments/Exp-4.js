function calculateresult(){
    let n = document.getElementById("subjects").value;
    let total=0;
    for(let i =1;i<=n;i++){
        let p = Number(prompt("Enter the subject"+i));
        total = total+p;
    }
    let avg = total/n;
    let grade;
    let result;

    if (avg >= 90){
        grade = 'A';
    }
    else if (avg>=80){
        grade = 'B';
    }
    else if (avg>=70){
        grade = 'C';
    }
    else if (avg>=60){
        grade = 'D';
    }
    else if (avg>=50){
        grade = 'F';
    }

    if(avg >= 40){
        result="pass";
    }
    else{
        result="Fail";
    }
    document.getElementById("result").innerHTML="Total Marks="+total+"<br>"+"Average="+avg+"<br>"+"Grade="+grade+"<br>"+"Result="+result;
}