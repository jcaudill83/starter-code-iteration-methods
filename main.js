// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

//Kata 1*

const activeUser = users.filter(user => user.isActive = "true")


printKata(1, users.filter)

//Kata 2

const emailAddress = users.map(user => user.email)

printKata(2, emailAddress)

//Kata 3

const companyProperty = users.some(user => user.company = "OVATION")

printKata(3, companyProperty)

//Kata 4

const userAge = users.find(user =>user.age >= "38")

printKata(4, userAge)

// Kata 5*

const overAge = users.find(user => user.age = "active", "38")

printKata(5, overAge)

// Kata 6*
// const userBalance = users.
printKata(6,)

// Kata 7*

printKata(7, )

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}