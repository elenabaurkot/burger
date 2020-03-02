// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

// Export at the end of the burger.js file.

// Controller setup
var orm = require("../config/orm.js")

function showAll() {
    orm.selectAll("burgers")
};

// will need to update this
function addBurger() {
    orm.insertOne("burgers", "burger_name", whateverAnswerIs)
}

// will need to update this
function updateOne(){
    orm.updateOne(column, columnName, id)
}

module.exports = burger;