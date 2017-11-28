# kotoka-webapp-api
Serverless RESTful API for Kotoka

Set up environment:


To build the application:

1) Install and configure AWS CLI.

2) Install npm and node.

3) Install Serverless Framework on npm.


To deploy to AWS

1) Configure Serverless like so: serverless config credentials --provider aws --key <key> --secret <secret key>
2) Run: sls deploy


To deploy locally:

Note: On OSX, you must bind the needed IPs to your loopbac device.

To do so:
Run ifconfig to determine the name of your loopback device. Ex. Mine is lo.
Run: sudo ifconfig  <loopback device name>  alias 127.0.0.17
Run: sudo ifconfig  <loopback device name>  alias 127.0.0.18

1) Run the local server in the '/testing' directory with: sudo node run-local-server.js

Note: root permissions are required to modify the hosts file and bind to port 80.


To run the React front end locally:

cd react-client

npm start
