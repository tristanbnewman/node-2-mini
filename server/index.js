const express = require("express")
const app = express()
const books = require("./controllers/book_controller")

app.use(express.json())
app.use(express.static(__dirname + '/../build'))

app.get("/api/books", books.read)
app.post("/api/books", books.create)
app.put("/api/books/:id", books.update)
app.delete("/api/books/:id", books.deleteBook)

app.listen(4000, ()=>{
    console.log("listening on port 4000")
})