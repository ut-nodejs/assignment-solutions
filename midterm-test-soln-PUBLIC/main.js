// main.js
"use strict";

// Listing 12.3 (p. 176-177)
const port = 3000,
    layouts = require('express-ejs-layouts'), // Listing 12.7 (p. 179)
    express = require("express"),
    app = express();

app.set("port", process.env.PORT || port);

// Listing 12.7 (p. 179)
app.set("view engine", "ejs");
app.use(layouts);

app.use(express.static("public")); // 제목 12.5 (p. 181)

// Listing 12.4 (p. 177)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// homeController.js
const homeController = require("./controllers/homeController");

// Listing 12.6 (p. 178)
app.get("/", homeController.showHome);
app.get("/transportation", homeController.showTransportation);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

// errorController.js
const errorController = require("./controllers/errorController");

// Listing 12.12 (p. 184)
app.use(errorController.logErrors);
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server running at: http://localhost:${app.get("port")}`);
});