const express = require("express");
const bodyparser = require('body-parser');

const teachersRouter = require("./routes/teachers");
const coursesRouter = require("./routes/courses");
const internsRouter = require("./routes/interns");
const roomsRouteur = require("./routes/rooms");
const formationsRouter = require("./routes/formations");

const indexRouter = require("./routes/index");

const app = express();
app.use(bodyparser.json());

app.use('/teachers', teachersRouter);
app.use('/courses', coursesRouter);
app.use('/interns', internsRouter);
app.use('/rooms', roomsRouteur);
app.use('/formations', formationsRouter);
app.use('/', indexRouter);

app.listen(3000, () => console.log('listening 3000'));
