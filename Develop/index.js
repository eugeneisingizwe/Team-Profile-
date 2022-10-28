//import the HTML 

const generateHTML = require('./assets/src/generateHTML');

//import the team 

const Manager = require("./assets/Lib/Manager");
const Engineer = require("./assets/Lib/Engineer");
const Intern = require("./assets/Lib/Intern");
const path = require("path");

//import node modules 

const fs = require("fs");
const inquirer = require("inquirer");


//empty array to pass the team 

const teamArr = [];

//start prompt for the manager, engineer, and intern

const managerInput = () => {
    console.log("Adding manager");

  return  inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "Who is the manager of this team",
                validate: managernameInput => {
                    if (managernameInput) {
                        return true;
                    } else {
                        console.log("please enter the team's manager name!");
                        return false;
                    }

                }


            },

            {
                name: "id",
                type: "input",
                message: "Please enter manager id number!",
                validate: managerIdInput => {
                    if (managerIdInput) {
                        return true;
                    } else {
                        console.log("please enter the correct id!");
                        return false;
                    }

                }


            },

            {
                name: "email",
                type: "input",
                message: "Please enter manager's email!",
                validate: managerEmail => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmail)
                    if (valid) {
                        return true;
                    } else {
                        console.log("please enter correct email!");
                        return false;
                    }

                }


            },

            {
                name: "officeNumber",
                type: "input",
                message: "Please enter manager's office number!",
                validate: managerofficeNumberInput => {
                    if (isNaN(managerofficeNumberInput)) {
                        console.log("please enter office numebr!");
                        return false;
                    } else {
                        return true;
                    }

                }

            }
        ])

        .then((managerAnswers) => {
            const { name, id, email, officeNumber } = managerAnswers;
            const manager = new Manager(name, id, email, officeNumber);

            teamArr.push(manager);
            console.log(manager);
          

        })
};

const engineerInternInPut = () => {
    console.log("adding engineer or intern to the team");

    inquirer
        .prompt([{

            name: "option",
            type: "list",
            message: "Are you Engineer or Intern",
            choices: ["engineer", "intern"]
        },

        {
            type: "name",
            name: "input",
            message: "What is name of the team member?",
            validate: teamMemberNameInput => {
                if (teamMemberNameInput) {
                    return true;
                } else {
                    console.log("Please enter the name of the team memebr!");
                    return false;
                }
            }

        },
        
        {
            type: "input",
            name: "id",
            message: "What is the team member id?",
            validate: teamMemberIdInput => {
                if (isNaN(teamMemberIdInput)) {
                    console.log("Please enter team memeber id!");
                    return false;
                } else {
                    return true;
                }
            }
        },


        {
            type: "input",
            message: "Please enter the team memeber email!",
            name: "email",
            validate: teamMemberEmail => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(teamMemberEmail)
                if (valid) {
                    return true;
                } else {
                    console.log("please enter the team member email!");
                    return false;
                }

            }

        },


        {
            type: "input",
            name: "github",
            message: "What is the team member github username?",
            when: (input) => input.option = "engineer",
            validate: teamMemberNameInput => {
                if (teamMemberNameInput) {
                    return true;
                } else {
                    console.log("Please enter the team member github username!")
                }
            }
        },

        {
            type: "input",
            name: "School",
            message: "What is the intern school?",
            when: (input) => input.option = "intern",
            validate: teamMemberNameInput => {
                if (teamMemberNameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern school!")
                }
            }
        },
        {
            type: "confrim",
            name: "confirmTeamMemberIsAdded",
            message: "Would like to add more team members?",
            default: false
        }

        ]).then((teamMemberAnswers) => {
            const { name, id, email, github, option, school, confirmTeamMemberIsAdded} = teamMemberAnswers;
            console.log(engineerAnswers);

            let teamMember; 
           
            if(option === "engineer"){
                teamMember = new Engineer(name, id, email, github);

                console.log(teamMember);
            }else if(option === "intern"){
                teamMember = new Intern(name, id, email, school);

                console.log(teamMember);
            }

            teamArr.push(teamMember);

            if (confirmTeamMemberIsAdded){
             return engineerInternInPut();
            } else{
                return teamArr;
            }

        })

    }

//genereate HMTL page

const writeFile = data => {
    fs.writeFile("./dist/index.html", data, (err) => {
        if(err){
            console.log(err);
            return
        }else {
            console.log("Have succesfully created your team!")
        }
    })
};

managerInput()
.then(engineerInternInPut)
.then(teamArr => {
    console.log(generateHTML(teamArr));
    return generateHTML(teamArr);

})
.then(HtmlpageContent => {
    console.log(HtmlpageContent);
    return writeFile(HtmlpageContent);
})
.catch(err => {
    console.log(err);
});

