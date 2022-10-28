//create the team

const generateTeam = function (team) {

    //Manager Card
    const generateManger = function (manager) {
        return `
        <div class="card employee-card">
            <div class="card-header big-primary text-white">
                    <h3 class="card-title">${manager.name}</h3>
                    <h4 class="card-title"><i class="fas-mug-hot mr-2"></i>${manager.getRole}</h4>
                </div>
                <div class="card-body">
                <lu class="list-group">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group">Office Number: ${manager.officeNumber}</li>
                    </lu>
            </div>
        </div>
        `;

    };
    
    //Engineer Card 
    
    const generateEngineer = function (engineer) {
        return `
        <div class="card employee-card">
            <div class="card-header big-primary text-white">
                    <h3 class="card-title">${engineer.name}</h3>
                    <h4 class="card-title"><i class="fas-mug-hot mr-2"></i>${engineer.getRole}</h4>
                </div>
                <div class="card-body">
                <lu class="list-group">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group">GitHub: <a href="https//github.com/${engineer.github}"  target="_blank" rel="noopener noreferrer">${engineer.github}</a></li></li>
                    </lu>
            </div>
        </div>
        `;
    };
    
    //Intern card 
    
    const generateIntern = function (intern) {
        return `
        <div class="card employee-card">
            <div class="card-header big-primary text-white">
                    <h3 class="card-title">${intern.name}</h3>
                    <h4 class="card-title"><i class="fas-mug-hot mr-2"></i>${intern.getRole}</h4>
                </div>
                <div class="card-body">
                <lu class="list-group">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-group">Office Number: ${intern.school}</li>
                    </lu>
            </div>
        </div>
        `;
    
    };


//set an empty array for the cards
const cardsArr = [];

//push array to page 
cardsArr.push(team 
    .filter(employee => employee.getRole() ==="Manager")
    .map(manager => generateManger(manager))
);

cardsArr.push(team 
    .filter(employee=> employee.getRole() ==="Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
);

cardsArr.push(team 
    .filter(employee => employee.getRole() ==="Intern")
    .map(intern => generateIntern(intern))
    .join("")
);
return cardsArr.join("");

}

module.exports = function (team) {
    return ` <!DOCTYPE html>
        <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel ='stylesheet' href="./style.css"/>
    
    <title>Team Profile</title>
    </head>
    <body>
    <header>
    <H1>My Team</H1>
    </header>
    
    <main>
    <div class="container">
    ${generateTeam(team)}
    </div>
    </main>
      
    </body>
    </body>
    </html>
    `;
    };


