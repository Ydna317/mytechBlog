const express = require('express');
const handlebars = require('express-handlebars');
const sessions = require('express-sessions');

const PORT = process.env.PORT || 3003;

const app = express();
