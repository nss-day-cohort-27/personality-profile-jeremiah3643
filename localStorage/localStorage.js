
// It's time to make your own site that describes your personality type that you discovered from 16personalities.com. Your site should have a single HTML page, with the following sections.

// General Profile Section: Three statements that you agree with. Three statements that you don't agree with, and why.
// People Like Me Section: 4 people that share your personality type.
// Comunication Section:
// How would I communicate best with my little sib.
// How would I like my instructors to communicate with me.
// How would I like my teammates to communicate with me


// Requirements
// You must create an object with three keys, each representing one of the sections. Store that object in local storage.
// Then when you write your application, read from local storage and use the data to build the three sections in your HTML.
// document.createElement()
// localStorage.getItem()
// You must use Flexbox to layout your page structure.
// You must push to Github and notify your lead instructor when you are done.

// Setting up Object
const personality = {}
personality.general = []
personality.likeMe = []
personality.communication = []

statementsAgree = {
    statement1: "You find it difficult to introduce yourself to other people.",
    statement2: "You often get so lost in thoughts that you ignore or forget your surroundings.",
    statement3: "You find it easy to stay relaxed even when there is some pressure.",
    why: "These questions from the test are good exaples of who I am."
}
statementsDisagree = {
    statement1: "You feel superior to other people.",
    statement2: "Being organized is more important to you than being adaptable.",
    statement3: "You do not mind being at the center of attention.",
    why: "I think these questions reflect I don't put much thought into organization and that I prefer to be in the background"
}
people = {
    person1: "Bill Gates!",
    person2: "Albert Einstein!!",
    person3: "Blaise Pascal",
    person4: "Isaac Newton",
}

wayToCommunicate = {
    sib: "One issue I have is that I very rarely reach out, though I am reliable if someone reaches out to me.",
    instructor: "Doesn't really matter. All forms of communication are fine.",
    team: "I prefer a more direct approach. Face to Face."
}


personality.general.push(statementsAgree)
personality.general.push(statementsDisagree)
personality.likeMe.push(people)
personality.communication.push(wayToCommunicate)


const saveDatabase = function (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(personality, "personality")
