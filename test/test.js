const wings = require("../")
var app = new wings.server()

app.listen(3000, () => console.log("running on port 3000"))

app.use('files', './public')

app.onGet("/", (ctx) => {
    ctx.res.send("hi")
})
app.onGet("/html", (ctx) => {
    ctx.res.sendFile('./public/index.html')
})