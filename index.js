let trash = document;
let count = 0;
let sem, Department, SelectorBtn, Clone, TypeOf, fakeNo, YearArray, SPI_Sem;
let ArrayNEW = [];
let TotalCreditsPoint = 0, TotlaCredit = 0;
let ExpectedCredits;
let ExpectedCPI;

$("#dropdownMenuLink").css("opacity", "0.5");
$("#dropdownMenuLink").prop("disabled", true);
$("#dropdownYearMenu").css("opacity", "0.5");
$("#dropdownYearMenu").prop("disabled", true);

Load();
Click();

function Load(){
    let DepartmentNames = [
        "FirstSemCard",
        "SecondSemCard",
        "BSBE",
        "ChE",
        "CST",
        "CE",
        "CSE",
        "ECE",
        "EE",
        "EP",
        "MNC",
        "ME",
        "BOX",
        "btn_cal"
    ];
    $.each(DepartmentNames, function(index, value){
        $("#"+value).css("display", "none");
    })
}

function Click(){
    $("#dropdownTypeList").on("click", OntypeClick);
    $("#dropdownYearList").on("click", OnYearClick);
    $("#dropdownList").on("click", OnDeptClick);
    $("#btn_CPI").on("click", OnCpiCal);

    // estimate cpi button to be added
    $("estimate_CPI_Btn").on("click", OnEstimate);

    $("#calculateagain_btn").on("click", OnCalculateAgain);
}

function OntypeClick(e){
    TypeOf = e.target.textContent;
    console.log(TypeOf);
    if(TypeOf === "SPI"){
        $("#dropdownYearMenu").text("Semester");
        $("#btn_CPI").text("Calculate SPI");
        $("#extimate_CPI_Btn").css("display", "none");
    }
    else{
        $("#dropdownYearMenu").text("Semester Completed");
    }
    $("#dropdownTypeLink").text(e.target.textContent);
    $("#dropdownTypeLink").prop("disabled", "true");
    $("#dropdownTypeLink").css("opacity", "0.5");
    $("#dropdownYearMenu").prop("disabled", false);
    $("#dropdownYearMenu").css("opacity", "1");
}

function OnYearClick(e){
    var sem = e.target.id;
    console.log(sem);
    $("#dropdownYearMenu").text(e.target.textContent);

    $("#dropdownTypeLink").prop("disabled", "true");
    $("#dropdownTypeLink").css("opacity", "0.5");
    $("#dropdownYearMenu").prop("disabled", true);
    $("#dropdownYearMenu").css("opacity", "0.5");
    $("#dropdownMenuLink").prop("disabled", false);
    $("#dropdownMenuLink").css("opacity", "1");

    e.preventDefault(); //to be asked from sarthak bhagwat;


}

function OnDeptClick(e){
    Department = e.target;
    console.log(Department.textContent);
    $("#dropdownMenuLink").prop("disabled", true);
    $("#dropdownMenuLink").css("opacity", "0.5");
    document.getElementById("btn_cal").style.display = "initial";   // to be done by jquery


    // var newId = "FirstSem_" + e.target.textContent;

    $("#FirstSemCard").attr("id", "FirstSem_" + e.target.textContent);
    // document.getElementById("FirstSemCard").id = newId;
    // $("'#'+ newId").attr("display", "initial");
    // document.getElementById(newId).style.display = "initial";
    $("#SecondSemCard").attr("id", "SecondSem_" + e.target.textContent);

    $("#dropdownMenuLink").text(e.target.textContent);

    switch(e.target.textContent){
        case `${e.target.textContent}`:{
            switch(sem){
                case "eight":{
                    document.getElementById(`${e.target.textContent}`).style.display = "initial";
                    document.getElementById(`FirstSem_${e.target.textContent}`).style.display = "initial";
                    document.getElementById(`SecondSem_${e.target.textContent}`).style.display = "initail";
                    break;
                }
            }
        }
    }
}