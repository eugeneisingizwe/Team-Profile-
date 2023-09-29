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
                message: "Who is the manager of this team?",
                validate: managerNameInput => {
                    if (managerNameInput) {
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
                    if (isNaN(managerIdInput)) {
                        console.log("Please enter manager's id number")
                        return false;
                    } else {
                        return true;
                    }

                }


            },

            {
                name: "email",
                type: "input",
                message: "Please enter manager's email!",
                validate: managerEmail =>{
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmail)
                    if(valid){
                        return true;
                    } else {
                        console.log("Please eneter the manager's email!");
                        return false;
                    }

                }

            },

            {
                type: "input",
                name: "officeNumber",
                message: "Please enter manager's office number",
                validate: managerofficeNumberInput => {
                    if (isNaN(managerofficeNumberInput)) {
                        console.log("Please enter manager's office number!")
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

//prompt to add engineer and intern to the team 

const engineerInternInPut = () => {
    console.log("Adding an engineer or intern to the team");

   return inquirer
        .prompt([{

            type: "list",
            name: "role",
            message: "Please choose your team member role",
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
                    console.log("Please enter the name of your team memebr!");
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
                    console.log("Please enter the team member id")
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
            message: "What is the team memeber github username?",
            when: (input) => input.role === "Engineer",
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
            when: (input) => input.role === "Intern",
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    console.log("Please enter the intern school!")
                }
            }
        },

        // Option to add more memebers to the team 
        {
            type: "confirm",
            name: "confirmTeamMemberIsAdded",
            message: "Would like to add more team members?",
            default: false
          
        }

        ]).then((teamMemberAnswers) => {
            const { name, id, email, github, role, school, confirmTeamMemberIsAdded} = teamMemberAnswers;
            console.log(teamMemberAnswers);

            let teamMember; 
           
            if(role === "Engineer"){
                teamMember = new Engineer(name, id, email, github);

                console.log(teamMember);
            }else if(role === "Intern"){
                teamMember = new Intern(name, id, email, school);

                console.log(teamMember);
            }

            teamArr.push(teamMember);

            if (confirmTeamMemberIsAdded){
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



