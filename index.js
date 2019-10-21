let  readlineSync  =  require('readline-sync');

const choices = {
    music: {
        streaming: ['RnB', 'Country', 'Jazz n Blues'],
        concert: ['Band', 'Symphony', 'Opera']
    },
    movies: {
        theater: ['Action', 'Romance', 'Comedy'],
        home: ['Family', 'Thriller', 'Fantasy']
    },
    fitness: {
        home: ['Cardio', 'Eating', 'Sleep Ratio'],
        gym: ['Cardio', 'Weight Lifting', 'Water Intake'] 
    },
}

const responses = [];

function gameIntro() {
    let userName = readlineSync.question( 'May I have your name?')
    responses.push(`Name: ${userName}`)
    let age = readlineSync.question('How old are you?')
    responses.push(`Age: ${age}`)
    interestCategories()
}

function interestCategories(){
    let interest = [ 'Music', 'Movies', 'Fitness']
    let interestSelection = readlineSync.keyInSelect(interest,'what are you passionate about?')
    const interestChoice = interest[interestSelection].toLowerCase();
    responses.push(`Interest Choice: ${interestChoice}`)
    interestBreakDown(choices[interestChoice])
    
}

function interestBreakDown(myChoice){
    const secondaryChoices = Object.keys(myChoice)
    const locationPreference = readlineSync.keyInSelect(secondaryChoices, 'where is your location')
    const locationChoice = secondaryChoices[locationPreference]
    responses.push(`Location Choice: ${locationChoice}`)
    const types = myChoice[locationChoice];
    const typeChoice = readlineSync.keyInSelect(types, 'What do you enjoy the most?')
    const result = types[typeChoice];
    responses.push(`Activity: ${result}`)
    output()
}

function output(){
    for (let i = 0; i<responses.length; i++){
        console.log(responses[i])
    }
    console.log('Enjoy!!!')
}

gameIntro()


