var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));

// Get phone screen size
var width = 0;
var height = 0;
var exec = require('child_process').exec;

var execCmd = function(cmd) {

}


              // get an instance of the express Router

router.get('/dimensions', function(req, res) {
   exec('adb shell wm size', function(error, stdout, stderr) {
      var wxh = stdout.split(':')[1].trim();
      width = wxh.split('x')[0];
      height = wxh.split('x')[1];
      console.log(width + ' ' + height);
      res.json({ width: width, height:height });
   });
});

router.post('/touch', function(req, res) {
   console.log('adb shell input tap ' + req.body.x + ' ' + req.body.y);
   exec('adb shell input tap ' + req.body.x + ' ' + req.body.y, function(error, stdout, stderr) {
      res.json({});
   });
})

router.post('/swipe', function(req, res) {
   console.log('adb shell input swipe ' + req.body.startX + ' ' + req.body.startY + ' ' + req.body.endX + ' ' + req.body.endY + ' ' + req.body.duration);
   exec('adb shell input swipe ' + req.body.startX + ' ' + req.body.startY + ' ' + req.body.endX + ' ' + req.body.endY + ' ' + req.body.duration, function(error, stdout, stderr) {
      res.json({});
   });
})

router.post('/key', function(req, res) {
   if(req.body.key == 67 || req.body.key == 66 ) {
      console.log('adb shell input keyevent ' + req.body.key);
      exec('adb shell input keyevent ' + req.body.key, function(error, stdout, stderr) {
         res.json({});
      });
   } else {
      console.log('adb shell input text ' + req.body.key);
      exec('adb shell input text ' + req.body.key, function(error, stdout, stderr) {
         res.json({});
      });
   }

})

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.use(express.static(__dirname));
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Magic happens on port ' + port);