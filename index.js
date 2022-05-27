let trash = document;
let count = 0;
let sem, Department, SelectorBtn, Clone, TypeOf, fakeNo, YearArray, SPI_Sem; //TypeOf-->what we have to calculate; sem-->Semester till we have to calculate CPI OR SPI
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

function Load() {
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
    $.each(DepartmentNames, function (index, value) {
        $("#" + value).css("display", "none");
    })
}

function Click() {
    $("#dropdownTypeList").on("click", OntypeClick);    //OnTypeClick function work properly
    $("#dropdownYearList").on("click", OnYearClick);    //OnYear Click work properly
    $("#dropdownList").on("click", OnDeptClick);
    SelectorLoad();
    $("#btn_CPI").on("click", OnCpiCal);

    // estimate cpi button to be added
    // $("estimate_CPI_Btn").on("click", OnEstimate);

    $("#calculateagain_btn").on("click", OnCalculateAgain);
}

function OntypeClick(e) {
    TypeOf = e.target.textContent;          //TypeOf --> What we have to calculate CPI/SPI
    console.log(TypeOf);        //
    if (TypeOf === "SPI") {
        $("#dropdownYearMenu").text("Semester");
        $("#btn_CPI").text("Calculate SPI");
        $("#extimate_CPI_Btn").css("display", "none");
    }
    else {
        $("#dropdownYearMenu").text("Semester Completed");
    }
    $("#dropdownTypeLink").text(e.target.textContent);
    $("#dropdownTypeLink").prop("disabled", true);
    $("#dropdownTypeLink").css("opacity", "0.5");
    $("#dropdownYearMenu").prop("disabled", false);
    $("#dropdownYearMenu").css("opacity", "1");
    e.preventDefault();
}

function OnYearClick(e) {
    sem = e.target.id;                  //sem --> semester till which we have to calculate the spi or cpi
    console.log(sem);
    $("#dropdownYearMenu").text(e.target.textContent);

    // $("#dropdownTypeLink").prop("disabled", true);
    // $("#dropdownTypeLink").css("opacity", "0.5");
    $("#dropdownYearMenu").prop("disabled", true);
    $("#dropdownYearMenu").css("opacity", "0.5");
    $("#dropdownMenuLink").prop("disabled", false);
    $("#dropdownMenuLink").css("opacity", "1");

    e.preventDefault(); //prevent the ancher tag to reload the page


}

function OnDeptClick(e) {
    Department = e.target;
    console.log(Department.textContent);
    $("#dropdownMenuLink").prop("disabled", true);
    $("#dropdownMenuLink").css("opacity", "0.5");
    $("#btn_cal").show();
    // document.getElementById("btn_cal").style.display = "initial";   // to be done by jquery


    // var newId = "FirstSem_" + e.target.textContent;


    //Assignint the First and Second  Semester to corresponding Department we selected.
    $("#FirstSemCard").attr("id", "FirstSem_" + e.target.textContent);
    // document.getElementById("FirstSemCard").id = newId;
    // $("'#'+ newId").attr("display", "initial");
    // document.getElementById(newId).style.display = "initial";
    $("#SecondSemCard").attr("id", "SecondSem_" + e.target.textContent);
    $("#dropdownMenuLink").text(e.target.textContent);
    console.log(sem);
    switch (sem) {
        case "eight": {
            document.getElementById(`${e.target.textContent}`).style.display = "initial";
            document.getElementById(`FirstSem_${e.target.textContent}`).style.display = "initial";
            document.getElementById(`SecondSem_${e.target.textContent}`).style.display = "initial";
            break;
        }
        case "seven": {
            trash.getElementById(`${e.target.textContent}`).style.display =
                "initial";
            trash.getElementById(
                `EightSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `SeventhSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `SixthSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `FifthSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `FourthSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `ThirdSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `FirstSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `SecondSem_${e.target.textContent}`
            ).style.display = "initial";
            break;
        }
        case "six": {
            trash.getElementById(`${e.target.textContent}`).style.display =
                "initial";
            trash.getElementById(
                `EightSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `SeventhSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `SixthSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `FifthSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `FourthSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `ThirdSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `FirstSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `SecondSem_${e.target.textContent}`
            ).style.display = "initial";
            break;
        }
        case "five": {
            trash.getElementById(`${e.target.textContent}`).style.display =
                "initial";
            trash.getElementById(
                `EightSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `SeventhSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `SixthSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `FifthSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `FourthSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `ThirdSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `FirstSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `SecondSem_${e.target.textContent}`
            ).style.display = "initial";
            break;
        }
        case "four": {
            trash.getElementById(`${e.target.textContent}`).style.display =
                "initial";
            trash.getElementById(
                `EightSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `SeventhSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `SixthSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `FifthSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `FourthSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `ThirdSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `FirstSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `SecondSem_${e.target.textContent}`
            ).style.display = "initial";
            break;
        }
        case "three": {
            trash.getElementById(`${e.target.textContent}`).style.display =
                "initial";
            trash.getElementById(
                `EightSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `SeventhSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `SixthSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `FifthSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `FourthSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `ThirdSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `FirstSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `SecondSem_${e.target.textContent}`
            ).style.display = "initial";
            break;
        }
        case "two": {
            trash.getElementById(`${e.target.textContent}`).style.display =
                "initial";
            trash.getElementById(
                `EightSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `SeventhSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `SixthSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `FifthSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `FourthSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `ThirdSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `FirstSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `SecondSem_${e.target.textContent}`
            ).style.display = "initial";
            break;
        }
        case "one": {
            trash.getElementById(`${e.target.textContent}`).style.display =
                "initial";
            trash.getElementById(
                `EightSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `SeventhSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `SixthSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `FifthSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `FourthSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `ThirdSem_${e.target.textContent}`
            ).style.display = "none";
            trash.getElementById(
                `FirstSem_${e.target.textContent}`
            ).style.display = "initial";
            trash.getElementById(
                `SecondSem_${e.target.textContent}`
            ).style.display = "none";
            break;
        }

    }

    //Fow now we don't need Add course Button

    // switch (sem) {
    //     case "eight": {
    //         let AddBtn = document.createElement("tr");
    //         AddBtn.id = "courseaddBtn_8";
    //         AddBtn.innerHTML = `<td><div class="container" id='courseaddDiv-8'><button class="btn btn-outline-success" id="courseaddBtn">Add Course</button></div></td><td></td><td></td>`;
    //         trash
    //             .getElementById(`EightSem_${Department.textContent}`)
    //             .getElementsByTagName("tbody")[0]
    //             .appendChild(AddBtn);
    //     }
    //     case "seven": {
    //         let AddBtn = document.createElement("tr");
    //         AddBtn.id = "courseaddBtn_7";
    //         AddBtn.innerHTML = `<td ><div class="container" id='courseaddDiv-7'><button class="btn btn-outline-success" id="courseaddBtn">Add Course</button></div></td><td></td><td></td>`;
    //         trash
    //             .getElementById(`SeventhSem_${Department.textContent}`)
    //             .getElementsByTagName("tbody")[0]
    //             .appendChild(AddBtn);
    //     }
    //     case "six": {
    //         let AddBtn = document.createElement("tr");
    //         AddBtn.id = "courseaddBtn_6";
    //         AddBtn.innerHTML = `<td ><div class="container" id='courseaddDiv-6'><button class="btn btn-outline-success" id="courseaddBtn">Add Course</button></div></td><td></td><td></td>`;
    //         trash
    //             .getElementById(`SixthSem_${Department.textContent}`)
    //             .getElementsByTagName("tbody")[0]
    //             .appendChild(AddBtn);
    //     }
    //     case "five": {
    //         let AddBtn = document.createElement("tr");
    //         AddBtn.id = "courseaddBtn_5";
    //         AddBtn.innerHTML = `<td ><div class="container" id='courseaddDiv-5'><button class="btn btn-outline-success" id="courseaddBtn">Add Course</button></div></td><td></td><td></td>`;
    //         trash
    //             .getElementById(`FifthSem_${Department.textContent}`)
    //             .getElementsByTagName("tbody")[0]
    //             .appendChild(AddBtn);
    //     }
    //     case "four": {
    //         let AddBtn = document.createElement("tr");
    //         AddBtn.id = "courseaddBtn_4";
    //         AddBtn.innerHTML = `<td ><div class="container" id='courseaddDiv-4'><button class="btn btn-outline-success" id="courseaddBtn">Add Course</button></div></td><td></td><td></td>`;
    //         trash
    //             .getElementById(`FourthSem_${Department.textContent}`)
    //             .getElementsByTagName("tbody")[0]
    //             .appendChild(AddBtn);
    //     }
    //     case "third": {
    //         let AddBtn = document.createElement("tr");
    //         AddBtn.id = "courseaddBtn_3";
    //         AddBtn.innerHTML = `<td ><div class="container" id='courseaddDiv-3'><button class="btn btn-outline-success">Add Course</button></div></td><td></td><td></td>`;
    //         trash
    //             .getElementById(`ThirdSem_${Department.textContent}`)
    //             .getElementsByTagName("tbody")[0]
    //             .appendChild(AddBtn);
    //         break;
    //     }
    // }
    if (TypeOf === "SPI") {
        YearArray = [
            "FirstSem",
            "SecondSem",
            "ThirdSem",
            "FourthSem",
            "FifthSem",
            "SixthSem",
            "SeventhSem",
            "EightSem",
        ];

        switch (sem) {
            case "one":
                fakeNo = 0;
                break;
            case "two":
                fakeNo = 1;
                break;
            case "three":
                fakeNo = 2;
                break;
            case "four":
                fakeNo = 3;
                break;
            case "five":
                fakeNo = 4;
                break;
            case "six":
                fakeNo = 5;
                break;
            case "seven":
                fakeNo = 6;
                break;
            case "eight":
                fakeNo = 7;
                break;
        }
        for (i = 0; i < 8; i++) {
            if (i === fakeNo) {
                SPI_Sem = YearArray[i];
                YearArray.splice(i, 1);
            }
        }

        YearArray.forEach(element => {
            document.getElementById(`${element}_${e.target.textContent}`).style.display = "none";
        });

    }


}
function OnCpiCal() {
    Calculation();
    let Final_CPI = (TotalCreditsPoint / TotalCredits).toFixed(2);
    trash.getElementById("modalMess").style.display = "none";
    trash.getElementById("modalCPI").style.display = "none";
    trash.getElementById("CPI_extended").style.display = "none";
    if (TotalCredits === 0 || TotalCreditsPoint === 0) {
        $('#modalCPI').modal('show');
    } else {
        if (Type_Of === "SPI")
            trash.getElementById('CPI_Message').textContent = `Your SPI is ${Final_CPI}`;
        else
            trash.getElementById('CPI_Message').textContent = `Your CPI is ${Final_CPI}`;
        trash.getElementById('BOX').style.display = 'initial';
    }
}

function OnCalculateAgain() {
    window.location.reload();
    window.scrollTo(0, 0);
}
function SelectorLoad() {
    let Selector = trash.getElementsByClassName("dropdown-menu");
    for (i = 2; i < Selector.length; i++) {
        Selector[i].addEventListener("click", OnTableClick);
    }
}
function OnTableClick(e) {
    document.getElementById(
        `${e.target.parentElement.parentElement.children[0].id}`
    ).textContent = `${e.target.textContent}`;
    e.preventDefault();
}

function Calculation() {
    TotalCredits = 0;
    TotalCreditsPoint = 0;

    if (TypeOf === "CPI") {
        let ArrayYear = [
            "FirstSem",
            "SecondSem",
            "ThirdSem",
            "FourthSem",
            "FifthSem",
            "SixthSem",
            "SeventhSem",
            "EightSem",
            "Semester"
        ];
        switch (sem) {
            case "eight":
                ArrayYear.splice(8, 1);
                break;
            case "seven":
                ArrayYear.splice(7, 2);
                break;
            case "six":
                ArrayYear.splice(6, 3);
                break;
            case "five":
                ArrayYear.splice(5, 4);
                break;
            case "four":
                ArrayYear.splice(4, 5);
                break;
            case "three":
                ArrayYear.splice(3, 6);
                break;
            case "two":
                ArrayYear.splice(2, 7);
                break;
            case "one":
                ArrayYear.splice(1, 8);
                break;
        }
        ArrayNEW = ArrayYear;
    }
    else if (Type_Of === "SPI") {
        ArrayNEW = [SPI_Sem];
    }

    ArrayNEW.forEach(function (element, index) {
        let dust;
        if (element === "Semester") {
            dust = trash.getElementById(`${element}_${Department}`);
        } else {
            dust = trash.getElementById(`${element}_${Department.textContent}`);
        }

        let DustSpan = dust.getElementsByTagName("span");
        for (i = 0; i < DustSpan.length; i++) {
            let SubjectCredit;
            let SubjectGrade = DustSpan[i].children[0].children[0].textContent;
            if (
                DustSpan[i].parentElement.parentElement.children[1].firstChild
                    .tagName === "INPUT" &&
                Number(
                    DustSpan[i].parentElement.parentElement.children[1].firstChild.value
                ) >= 0
            ) {
                SubjectCredit = Number(
                    DustSpan[i].parentElement.parentElement.children[1].firstChild.value
                );
            } else {
                SubjectCredit = Number(
                    DustSpan[i].parentElement.parentElement.children[1].textContent
                );
            }
            switch (SubjectGrade) {
                case "A/A*": {
                    TotalCreditsPoint = TotalCreditsPoint + 10 * SubjectCredit;
                    TotalCredits = TotalCredits + SubjectCredit;
                    break;
                }
                case "B": {
                    TotalCreditsPoint = TotalCreditsPoint + 8 * SubjectCredit;
                    TotalCredits = TotalCredits + SubjectCredit;
                    break;
                }
                case "C": {
                    TotalCreditsPoint = TotalCreditsPoint + 6 * SubjectCredit;
                    TotalCredits = TotalCredits + SubjectCredit;
                    break;
                }
                case "D": {
                    TotalCreditsPoint = TotalCreditsPoint + 4 * SubjectCredit;
                    TotalCredits = TotalCredits + SubjectCredit;
                    break;
                }
                case "E": {
                    TotalCreditsPoint = TotalCreditsPoint + 2 * SubjectCredit;
                    TotalCredits = TotalCredits + SubjectCredit;
                    break;
                }
                case "F": {
                    TotalCreditsPoint = TotalCreditsPoint + 0 * SubjectCredit;
                    TotalCredits = TotalCredits + SubjectCredit;
                    break;
                }
                case "Drop": {
                    break;
                }
            }
        }
    });
}
