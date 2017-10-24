/*
** This script will attemp to start a test environment by running serverless-offline,
** as well as emulating s3 and forwarding requests from port 80.
**
** Because this script binds to a low port, it must be run as root.
**
** Before running this file, you must add entries the kotoka domains in your hosts
** like so:
** 127.0.0.2 kotoka.org
** 127.0.0.3 api.kotoka.org
**
** You may have to disconnect from the internet initially if you get an address not
** available error. 
*/

'use strict'

var forward = require('../../http-forward-host');
var express = require('express')
var child_process = require('child_process');

var staticServerPort = 4000;
var staticServerHost = 'kotoka.org';

var apiServerPort = 3000;
var apiServerHost = 'api.kotoka.org';

//Create static file server to simulate s3
var app = express()

app.use(express.static('../client/dist',{ 'extensions' : ['html']}));

app.listen(staticServerPort, staticServerHost, function () {
  console.log('Static file server up at ' + staticServerHost + ':' + staticServerPort);
});

//Run 'sls offline start --host api.kotoka.org' to start the offline server
var apiServerProcess = child_process.spawn('sls', ['offline', 'start', '--host', apiServerHost],
  {
    'cwd' : '..',
  }
);

//Print any server output to stdout and stderr respectively
apiServerProcess.stdout.on('data', (data) => {
  console.log(`api-server: ${data}`);
});

apiServerProcess.stderr.on('data', (data) => {
  console.error(`api-server: ERROR: ${data}\n`);
});

forward(staticServerHost, staticServerPort, 80);
forward(apiServerHost, apiServerPort, 80);
