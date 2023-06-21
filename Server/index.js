import express from "express";

const app = express();

app.get("/",(req,res) => {
    res.send("Hi Server is Live..!!");
})

app.listen(5000, () => {
	console.log("server has started on port 5000");
});