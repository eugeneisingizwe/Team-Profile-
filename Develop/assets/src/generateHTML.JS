    //Manager Card
    const generateManger = function (manager) {
        return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${manager.name}</h3>
                    <h4>Mangaer</h4><i class="material-icons"></i>
                </div>

                <div class="card-body">
                    <p class="id">ID: ${manager.id}</P>
                    <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="office number">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
        </div>
        `;

    };
    
    //Engineer Card 
    
    const generateEngineer = function (engineer) {
        return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${engineer.name}</h3>
                    <h4>Mangaer</h4><i class="material-icons"></i>
                </div>

                <div class="card-body">
                    <p class="id">ID: ${engineer.id}</P>
                    <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="github">Github: <a href="https://github.com/ ${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
        </div>
        `;
    };
    
    //Intern card 
    
    const generateIntern = function (intern) {
        return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${intern.name}</h3>
                    <h4>Mangaer</h4><i class="material-icons"></i>
                </div>

                <div class="card-body">
                    <p class="id">ID: ${intern.id}</P>
                    <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="office number">Office Number: ${intern.school}</p>
            </div>
        </div>
        </div>
        `;
    
    };

    // push array to page 
    generatTHML = (data) => {
        
        //set an empty array for the cards
        const cardsArr = [];

        for (let i = 0; i < data.length; i++){
            const team = data[i];
            const role = team.getRole();

            //calll the manager, engineer, and intern fucntion

            if (role === "Manager"){
                const managerCard = generateManger(team);
                cardsArr.push(managerCard);

            } 

            if (role === "Engineer"){
                const engineerCard = generateEngineer(team);
                cardsArr.push(engineerCard)
            }

            if (role === "Intern"){
                const internCard = generateIntern(team);
                cardsArr.push(internCard);
            }
        }

        const teamCards = cardsArr.join("")

        const generateTeam = generateTeamPage(teamCards);
        return generateTeam;


    }






const generateTeamPage = function (teamCards) {
    return ` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css"/>
        <title>Document</title>
    </head>
    <body>
    <header>
    <nav class="navbar" id="navbar">
        <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
    </nav>
</header>
<main>
    <div class="container">
        <div class="row justify-content-center" id="team-cards">
            ${teamCards}
        </div>
    </div>
</main>
<script src="index.js"></script>
    </body>
  `
    };

    module.exports = generatTHML;


  

