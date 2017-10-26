/**
 * Jason Sawatzky:
 * Based on http-port-forward by meicj.
 *
 * Added support for custom domains.
 */

var http = require('http');
var forward = require('http-forward');

/**
 * Forward port for incoming HTTP requests
 * @param {Number} portForm - The port NO. which you want to forward from
 * @param {Number} portTo - The port NO. which you want to forward to
 * @param {Object} [options] - Options Config object passed to the forward
 * @param {Boolean} [options.isPublicAccess=false] - If true the new port will be accessible for others
 */
function forwardPort(host, portForm, portTo, options) {

    options = options || {};

    var server = http.createServer(function (req, res) {

      req.forward = {target: 'http://' + host + ':' + portForm};
        forward(req, res);
    });

    server.listen(portTo, host);

    console.log(
        'server start. forward port ' + portForm + ' to ' + portTo +
        (options.isPublicAccess ? '(publicly accessible)' : '')
    );
}

module.exports = forwardPort;
