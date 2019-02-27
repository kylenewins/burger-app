# burger-app
<h1>Here is my burger App</h1>

<p>The app is esentially a demonstration of different http requests executed with Express. The First thing that the app registers is the server.js file. Within that file are all of the routes and imported information from the MVC structure that are necessary to run the app. From the Back to the front, this is how the app functions...</p>

<h3>DB Files</h3>
<p>The database files are pretty self explanatory; the schemal.sql is the code that created the burgers_db database in MySQL, and the seeds.sql file contains the queries that were run to populate the table with the initial data. </p>

<h3>Config Files</h3>
<p>The config directory contains two files: connection.js and orm.js. The connection.js file is simply the code to connect my app to the MySQL database. The orm.js file was a bit tricky, as it sets the groundwork for the multiple functions that are at the core of the app's functionality. The printQuestionMarks() and objToSQL() functions were borrowed from the previous in-class assignment we completed, as they help to format the queries' syntax. The three functions that are exported within the orm object are as follows</p>
<ol>
    <li>selectAll(): Executes a simple "SELECT * FROM TABLE" query where the table is passed in as a parameter of the function. The data is stored into a callback so that it can run asynchronously</li>
    <li>insertOne(): executes a "INSERT INTO ___ VALUS(_____,____)" query i.e adds a new item into the table with the correct data. The syntax on this one tripped me up for a while, but the formatting functions made it easier.</li>
    <li>updateOne(): This function executes a "UPDATE TABLE ____ SET ___ WHERE ____" query. This function is used to update the burgers "devoured" attribute from 0 to 1</li>
</ol>

<h3>Model/Controller Files</h3>
<p> The burger.js file in the models directory essentially just re-exports the orm functions with particular syntax to talk to the burgers_db database. </p>
<p>Once the burger.js model is exported, it is the grabbed by the burger_controller.js file with a require() statement. The controller file serves as the "rulebook" for whenever there is an http get/post/put request given to the api. The controller uses an express router to handle the following requests.<p>
<ol>
    <li>get request for "/" url: Sends all of the burger data as a JSON response. It then renders the index.handlebars page with the data it received</li>
    <li>Post request for "/api/burgers: sends a new data row into the table and then returns the JSON data</li>
    <li>Put request for "/api/burgers/:id": edits the information in the table where the id matches the id of the burger that the user clicked on. It then sends back the data as a JSON object.</p>
</ol> 

<h3>Public Files</h3>
<p>The public files are pretty self explanatory. There is a stylesheet, and image foleder, and a client-side javascript file that handles the click events. It is within these click events that the get/post/put requests are actually issued with AJAX calls.</p>

<h3>Views Files</h3>
<p>The views files are just the client-side html formatted with handlebars to take data from the burgers object (passed into the file with the burger_controllers.js file). The main.handlebars file that is found in the layouts directory acts as the head of the html page, where the index.handlebars file acts as the body. I used bootstrap, fontawesome, and google fonts for style points.</p>
