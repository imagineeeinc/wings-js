const wings = require("../")
var app = new wings.server()

app.listen(3000, () => console.log("running on port 3000"))

app.onGet("/", () => {
    console.log("requesting '/'")
})