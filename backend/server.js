const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello, I'm alive`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "lego", "location": "Bærgæn"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "2014", "yearTo": "2018", "place": "Spinn Haugesund", "comment": "Sykkelstøff"}, {"yearFrom": "2011", "yearTo": "2013", "place": "711", "comment": "Making coffee"}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "2005", "yearTo": "2007", "place": "vardafjelle", "comment": "Studying"}, {"yearFrom": "2001", "yearTo": "2004", "place": "håvåsen", "comment": "stødy"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`)
});
