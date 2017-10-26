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

var forward = require('./http-forward-host');
var express = require('express')
var child_process = require('child_process');
var fs = require('fs');
var JFile = require('jfile');
var os = require('os');

var staticServerPort = 4000;
var staticServerHost = 'kotoka.org';

var apiServerPort = 3000;
var apiServerHost = 'api.kotoka.org';

//Create static file server to simulate s3
var app = express()
app.use(express.static('../client/dist',{ 'extensions' : ['html']}));

//Determine the host OS
var platform = os.platform();
var hostsFileLocation;

if(platform == 'linux') {
  hostsFileLocation = '/etc/hosts';
}
else if(platform == 'darwin'){
  hostsFileLocation = '/private/etc/hosts'
}
else if(platform == 'win32') {
  hostsFileLocation = '%SystemRoot%\\System32\\drivers\\etc\\hosts';
}
else {
  console.error('Error: Operating System not supported')
  process.exitCode = 1;
}

var hostsFileText = fs.readFileSync(hostsFileLocation, 'utf8', function (err,data) {
  if (err) {
    return console.error('Error: Problem reading hosts file: '  + err);
  }
  console.log('hosts file read successfully');
});

fs.writeFileSync('hosts-backup', hostsFileText, 'utf8', function (err) {
  if (err) {
    console.error('Error: Problem writing hosts backup: ' + err);
    process.exitCode = 1;
  }
  console.log('hosts file backup up');
});

console.log(hostsFileLocation);
console.log(hostsFileText);
var originalHostsFileText = hostsFileText;
hostsFileText += '\n127.0.0.17 kotoka.org\n127.0.0.18 api.kotoka.org';
console.log(hostsFileText);

fs.writeFileSync(hostsFileLocation, hostsFileText, 'utf8', function (err) {
  if (err) {
    console.error('Error: ' + err);
    process.exitCode = 1;
  }
  console.log('hosts file patched');
});

//Start local static host
app.listen(staticServerPort, staticServerHost, function () {
  console.log('Static file server up at ' + staticServerHost + ':' + staticServerPort);
});

//Run 'sls offline start --host api.kotoka.org' to start the offline FaaS
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

process.on('SIGINT', () => {
  fs.writeFile(hostsFileLocation, originalHostsFileText, 'utf8', function (err) {
    if (err) {
      console.error('Error: Problem restoring hosts file: ' + err);
      console.log('Press control + d to exit');
      process.exitCode = 1;
    }
    console.log('hosts file restored');
    process.exit(0);
  });
});
