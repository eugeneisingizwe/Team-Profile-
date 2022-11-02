//import the HTML 

const generateHTML = require("./assets/src/generateHTML");

//import the team 

const Manager = require("./assets/Lib/Manager");
const Engineer = require("./assets/Lib/Engineer");
const Intern = require("./assets/Lib/Intern");


//import node modules 

const fs = require("fs");
const inquirer = require("inquirer");



//empty array to pass the team 

const teamArr = [];

//function to intialize the choices to pick and add a team memebr 
const managerInput = () => {
    console.log("Adding a manager to the team");

       return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?",
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
                        console.log("please enter the correct id number!");
                        return false;
                    }

                }


            },

            {
                name: "email",
                type: "input",
                message: "Please enter manager's email!",
                validate: managerEmail =>{
                    if(managerEmail){
                        return true;
                    } else {
                        console.log("Please eneter the manager's email!");
                        return false;
                    }

                }

            },

            {
                name: "officeNumber",
                type: "input",
                message: "Please enter manager's office number!",
                validate: managerofficeNumberInput => {
                    if (managerofficeNumberInput) {
                        return true;
                    } else {
                        return false;
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
    console.log("Adding an engineer or intern to the team");

   return inquirer
        .prompt([{

            type: "list",
            name: "option",
            message: "Add an Engineer or Intern to the team!",
            choices: ["Engineer", "Intern"]
        },

        {
            type: "input",
            name: "name",
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
                if (teamMemberIdInput) {
                    return true;
                } else {
                    console.log("Please enter team memeber id!");
                    return true;
                }
            }
        },


        {
            type: "input",
            message: "Please enter the team memeber email!",
            name: "email",
            validate: teamMemberEmail => {
                if (teamMemberEmail) {
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
            message: "What is the engineer github username?",
            when: (input) => input.option = "Engineer",
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    console.log("Please enter the team member github username!")
                }
            }
        },

        {
            type: "input",
            name: "school",
            message: "What is the intern school?",
            when: (input) => input.option = "Intern",
            validate: internSchool => {
                if (internSchool) {
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
          
        }

        ]).then((teamMemberAnswers) => {
            const { name, id, email, github, option, school, confirmTeamMemberIsAdded} = teamMemberAnswers;
            console.log(teamMemberAnswers);

            let teamMember; 
           
            if(option === "Engineer"){
                teamMember = new Engineer(name, id, email, github);

                console.log(teamMember);
            }else if(option === "Intern"){
                teamMember = new Intern(name, id, email, school);

                console.log(teamMember);
            }

            teamArr.push(teamMember);

            if (confirmTeamMemberIsAdded === "yes"){
             return engineerInternInPut(teamArr);
            } else{
                return teamArr;
            }

        })

    }

//genereate HMTL page

const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if(err){
            console.log(err);
            return
        }else {
            console.log("You have succesfully created your team!")
        }
    })
};

managerInput()
.then(engineerInternInPut)
.then(teamArr => {
    // console.log(generateHTML(teamArr));
    return generateHTML(teamArr);

})
.then(htmlPage => {
    console.log(htmlPage);
    return writeFile(htmlPage);
})
.catch(err => {
    console.log(err);
});



