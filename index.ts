
import inquirer from "inquirer";

async function main() {
    const subjectMarks = await inquirer.prompt([
        { message: "Enter English Marks:", type: "number", name: "engMarks" },
        { message: "Enter Maths Marks:", type: "number", name: "mathsMarks" },
        { message: "Enter Chemistry Marks:", type: "number", name: "chemistryMarks" },
        { message: "Enter Physics Marks:", type: "number", name: "physicsMarks" },
        { message: "Enter Computer Marks:", type: "number", name: "computerMarks" },
    ]);

    let totalMarks = subjectMarks.engMarks + subjectMarks.mathsMarks + subjectMarks.chemistryMarks + subjectMarks.physicsMarks + subjectMarks.computerMarks;
    console.log("-----------------------------");
    console.log("Total Marks: ", totalMarks);
    console.log("-----------------------------");

    marsheet(
        subjectMarks.engMarks,
        subjectMarks.mathsMarks,
        subjectMarks.chemistryMarks,
        subjectMarks.physicsMarks,
        subjectMarks.computerMarks,
        totalMarks // Passing the total marks to the marsheet function
    );
}

function marsheet(eng: number, maths: number, chemistry: number, physics: number, computer: number, totalMarks: number) {
    let totalNumbers: any = eng + maths + chemistry + physics + computer;
    let percentage: any = (totalNumbers / 500) * 100;

    console.log("-----------------------------");
    console.log("Percentage is:  ", percentage);
    console.log("-----------------------------");
    console.log(" ");
    
    if (percentage <= 100 && percentage >= 80) {

        console.log("-----------------------------------------------------");
        console.log("Your Grade is A+ ", "..... You are Brilliant Student ");
        console.log("-----------------------------------------------------");

    } else if (percentage <= 79 && percentage >= 70) {
       
        console.log("------------------------------------------------");
        console.log("Your Grade is A", "  ..... You are Star Student ");
        console.log("------------------------------------------------");

    } else if (percentage <= 69 && percentage >= 60) {

        console.log("-----------------------------------------------");
        console.log("Your Grade is B", "   .... You are Good Student");
        console.log("-----------------------------------------------");

    } else if (percentage <= 59 && percentage >= 50) {

        console.log("-------------------------------------------------------");
        console.log("Your Grade is C", "   .... You are Satisfactory Student");
        console.log("-------------------------------------------------------");

    } else if (percentage <= 49 && percentage >= 40) {

        console.log("-----------------------------------------");
        console.log("Your Grade is D ..... Need Improvement");
        console.log("-----------------------------------------");
    } else if (percentage <= 39 && percentage >= 0) {

        console.log("----------------------------------------------");
        console.log("You are Failed....... Very Disappointing .... ");
        console.log("----------------------------------------------");

    }else {

        console.log("------------------------------");
        console.log("You Entered Wrong Marks ..... ");
        console.log("------------------------------");
        console.log("R e s u l t  is  F a k e .... ");
        console.log("------------------------------");
}
}
main();

/*
import inquirer from "inquirer"

const subjectmarks = await inquirer.prompt([
    { message: "Enter English Marks:", type: "number", name: "engMarks" },
    {message: "Enter Maths Marks:", type: "number", name: "mathsMarks"},
    {message: "Enter Chemistry Marks:", type: "number", name: "chemistryMarks"},
    {message: "Enter Physics Marks:", type: "number", name: "physicsMarks"},
    {message: "Enter Computer Marks:", type: "number", name: "computerMarks"},
  ]);

  let totalnumber = (subjectmarks.engMarks + subjectmarks.mathsMarks + subjectmarks.chemistryMarks + subjectmarks.physicsMarks + subjectmarks.computerMarks)
  console.log (totalnumber)


function marsheet(eng:number, maths:number, chemistry:number, physics:number, computer: number, marks:number) {
    let totnumbers:any = (eng + maths + chemistry + physics + computer);
    let percen:any = (totnumbers / (5 * marks)) * 100; // calculate the percentage correctly

    console.log("Total Numbers: " , totnumbers);
    console.log("Percentage is:  ", percen);

    if (percen <= 100 && percen >= 80) {
        console.log("Your Grade is A+ ", "..... Brilliant Student ");
    } else if (percen <= 79 && percen >= 70) {
        console.log("Your Grade is A", "  ..... Star Student ");
    } else if (percen <= 69 && percen >= 60) {
        console.log("Your Grade is B", "   .... Good Student");
    } else if (percen <= 59 && percen >= 50) {
        console.log("Your Grade is C", "   .... Satisfactory Student");
    } else if (percen <= 49 && percen >= 40) {
        console.log("Your Grade is D ..... Need Improvement");
    } else {
        console.log("You are Failed....... Very Disappointing .... ");
    }
}

marsheet(55, 68, 75, 55, 62, 100); // calling the function with example inputs
*/