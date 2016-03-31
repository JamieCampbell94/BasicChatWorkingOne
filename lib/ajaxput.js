// function AjaxPost(URL, callback)
//   { var message = "hello"
//     var ajaxObj = new XMLHttpRequest();
//     ajaxObj.open("POST", URL, true); // The TRUE implies asynchronous
//     ajaxObj.onreadystatechange = function()
//       { if (ajaxObj.status == 200)
// 	       if (ajaxObj.readyState == 4)
// 		       callback(ajaxObj.responseText);
//       }
//     ajaxObj.send(message);
//   }

(function() {

  // Self invoking function optional - allows function level scope (non global)
  var events = {
    init: function() {
      // Init function - checks DOM for elements and binds events if they are found
      var randomTextBtn = document.getElementById('addRandomText'); // Find button

      if(randomTextBtn) {
        // If found add event listener
        randomTextBtn.addEventListener('click', function(e) {
          // Run this on click of button
          // e contains properties about this click event - Optional data
          events.addRandomText(e);
        });
      }
    },

    addRandomText: function(e) {
      var textInput = document.getElementById('randomText'); // Find the text input
      if(textInput.value !== '') {
        // Check if empty - not empty
        // Use value from form in a JSON object - Key value pairs
        var data = {
          randomText: textInput.value
          var data = "twat"
        };

        events.runAJAX('Database/index.php', 'POST', data, function(xhr) {
          // Call the helper to POST to put.php and run this CB in response
          // Pass the xhr into it to ensure scope is set
          if(xhr.status === 200) {
            // Clear input on success
            textInput.value = '';
          }

          if(xhr.status === 500) {
            // Alert if broke
            alert('someshit broke!');
          }
        });

      } else {
        // Empty
        alert('Input empty');
      }
      //console.log(e);
    },

    runAJAX: function(url, method, data, callback) {
      // AJAX helper to prevent duplicate code
      // Accepts a URL to do something with, Method put post delete get, Data to send and callback for when done
      var xhr = new XMLHttpRequest(); // New AJAX
      xhr.open(method, url); // Open with passed params
      xhr.addEventListener('load', function() {
        // On finish run callback - Pass in xhr for access in CB
        callback(xhr);
      });
      var json = JSON.stringify(data); // Turn the JSON object to a string (raw data)
      xhr.send(json); // Send the request
    }
  };

  events.init();
})();
