/*
** This is the harvester handler. It will handle requests to '/available'.
** This handler will receive messages from the plant queue that contain
** information for a new plant image uploaded to plant bucket.
** 
** It will then send the image to another Harvester handler that will 
** read the message and load the image for identifying
*/

const AWS = require('aws-sdk');

var AWS_Region = process.env.AWS_REGION;

var sqs = new AWS.SQS({region: AWS_Region});
var lambda = new AWS.Lambda({region: AWS_Region});
var s3 = new AWS.S3({region: AWS_Region});

function receiveMessage(callback) {
  var params = {
    Queue_Url: PLANT_QUEUE_URL,
    MaxNumberOfMessages: 1
  };
  sqs.receiveMessage(params, function(err, data) {
    if (err) {
       console.error(err, err.stack);
       callback(err);
    } else {
       callback(null, data.Messages);
    }
  });
}

function invokeHarvesterLambda(task, callback) {
   var params {
     FunctionName = HARVESTER_LAMBDA_NAME,
     InvocationType = 'Event',
     Payload: JSON.stringify(task)
   };
   lambda.invoke(params, function(err, data) {
     if (err) {
        console.error(err, err.stack);
        callback(err);
     } else {
        callback(null, data.Messages);
     }
   });
}
   

function handleSQSMessage(context, callback) {
  receiveMessage(function(err, message) {
    if (message && message.length > 0) {
       var invocations[];
       invocations.push(function(callback) {
         invokeHarvesterLambda(message, callback);
       });
      async.parallel(invocations, function(err) {
        if (err) {
          console.error(err, err.stack);
          callback(err);
        } else {
          callback(null, 'PAUSE');
        }
      });
    } else {
      callback(null, 'DONE');
    }
  });
}


module.exports.receivePlantImage = function (event, context, callback) {
   handleSQSMessage(context, callback);
}


function deleteMessage(receiptHandle, cb) {

  sqs.deleteMessage({
    ReceiptHandle: receiptHandle,
    QueueUrl: PLANT_QUEUE_URL
  }, cb);
}


function work(task, cb) {
   console.log(task);
   cb();
}


module.exports.harvesterlambda = function (event, context, callback) {
   work(event.Body, function(err) {
     if (err) {
        callback(err);
     } else {
        deleteMessage(event.ReceiptHandle, callback);
     }
   });
};
