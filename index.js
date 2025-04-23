// A user has 3 attempts to log in. Simulate failed login attempts using while. After 3, show "Account locked".
function LoginAttempts(){
    let loginAttempts = 1
    while(loginAttempts <= 3){
        console.log(`Login attempt ${loginAttempts}`);
        loginAttempts++

        if (loginAttempts > 3){
            console.log(`Account blocked`)
    } }
   } 
   LoginAttempts()

// Users are voting on a feature. Use do...while to log each vote from an array until all votes are processed.
function processVotes(votes){
    let index = 0;
    if(votes.length === 0){
        console.log("No votes to process");
        return;
    }
    do{
        console.log(`Process vote:${votes[index]}`);
            index += 1;
    }
    while(index < votes.length);
    console.log("All votes processed.")
   }
   let votes = ['yes','yes','no','no','yes']
processVotes(votes)

// Loop through an array of numbers from 1–7 and use a switch to print the corresponding day name.
function numberDays(){
    numbers.forEach(number => {
        switch(number){
            case 1:
                console.log("Sunday");
                break;
            case 2:
                console.log("Monday");
                break;
            case 3:
                console.log("Tuesday");
                break;
            case 4:
                console.log("Wednesday");
                break;
            case 5:
                console.log("Thursday");
                break;
            case 6:
                console.log("Friday");
                break;
            case 7:
                console.log("Saturday")
                break ;
            default :
                console.log("Day doesn't exist");
                break;
        }
    });
}
let numbers = [1,2,3,4,5,6,7]
numberDays()
// Given an array of password strings, use if...else to: log "Strong" if length >= 8, and "Weak" otherwise.
function getStrongPassword(passwords){
    for ( let i = 0; i < passwords.length; i++){
        if (passwords[i].length >= 8 ){
            console.log('Strong');
        }else{
            console.log('Weak');
        }
    }
}
let passwords = ["aarcherssii","markei","passmakker","bookwormssaq","java"]
getStrongPassword(passwords)

// You're building a multilingual site. Use a switch to show greetings based on language codes. I.e "en" → "Hello", "fr" → "Bonjour", "sw" → "Habari".
function switchLanguage(){
    languages.forEach(language => {
        switch(language){
            case "en":
                console.log("Hello");
                break;
            case "fr":
                console.log("Bonjour");
                break;
            case "sw":
                console.log("Habari");
                break;
            default :
                console.log("Choose language");
                break;
        }
    });
}
let  languages= ["en","sw","fr","esp"]
switchLanguage()

// You're building a weather dashboard. Loop through an array of temperatures and: If above 30, log "High heat alert!", else if below 15, log "Cold alert!", else, log "Normal conditions"
   
function getTemperatureCondition(temperatures){
    for (let i = 0;i < temperatures.length;i ++){
        if (temperatures[i] >= 30){
            console.log("High heat alert!")
        }else if ( temperatures[i] <= 15 && temperatures[i] < 30 ){
            console.log("Cold alert!")
        }else{
            console.log("Normal conditions")
        }
        }
       
    }
    let temperatures =[35,20,21,12,10]
   getTemperatureCondition(temperatures)

// Users are queued to register. Use a while loop to remove and print each name until the queue is empty.
function clearRegister(queue){
    while (queue.length > 0){
        let user = queue.shift();
        console.log(`Register user : ${user}`)
    }console.log('All users have been registered')
}

let users = ["Winnie","Gilbert","John","Mary"]
clearRegister(users);


// Students retake a test until they score 50 or more. Use do...while to simulate attempts, increasing the score by 10 each time until it's >= 50.
function studentRetakes(score){
     score = 0
    let studentAttempts = 1
    do{
        console.log(`Attempt ${studentAttempts}: Score = ${score}`);
        studentAttempts ++;
        score += 10
    }
    while(score <= 50);
   }
studentRetakes([10])
