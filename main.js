// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.


// 2, 3, 4, 5 are done!
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

//Kata 1*
const activeUser = users.filter(user => user.isActive)

printKata(1, activeUser)

//Kata 2

const emailAddress = users.map(users => users.email)

printKata(2, emailAddress)

//Kata 3

const companyProperty = users.some(users => users.company = "OVATION")

printKata(3, companyProperty)

//Kata 4

const userAge = users.find(users =>users.age >= "38")

printKata(4, userAge)

// Kata 5

const overAge = users.find(users => users.age >= "active",  "38")

printKata(5, overAge)

// Kata 6*
const userBalance = users
.filter (users => users.company === "ZENCO")
.map (users => users.balance)

printKata(6, userBalance)

// Kata 7*
const hasTag = users

.filter(user => user.tags.includes("fugiat"))
.map(users => users.age)

printKata(7, hasTag)

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