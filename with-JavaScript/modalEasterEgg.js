/*
Copyright (c) 2016 Ashkan Paleganeh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
'use strict';

var mouseEnterFlag=false; // to know if mouse is over the element or not
var data; // to store the content of the json file
var myElement; // the element you want to check if the mouse is over it

// a function for reading json files
function loadJSON(fileAddress, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', fileAddress, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
}

//You can change the address of your json file from the line below
loadJSON("modalEasterEgg.json", function(response) {
   // Parse JSON string into object
   data = JSON.parse(response);

   // The element with the mouse event
   myElement = document.getElementById(data['theElement']);

   // two events to change mouseEnterFlag when mouse enter the element and leave
   myElement.onmouseover = function(){
     mouseEnterFlag=true;
     //console.log("mouse is over the Element");
   }
   myElement.onmouseout = function() {
     mouseEnterFlag=false;
     //console.log("mouse not over the Element");
   }

   // when a key is pressed
   document.getElementsByTagName("body")[0].onkeypress= function keyPressed(event) {
        var theCharacter=event.key;
        //console.log(mouseEnterFlag +"   "+theCharacter);
        theCharacter = theCharacter.toUpperCase();
        data['theCharacter'] = data['theCharacter'].toUpperCase();

        /* If mouse is over the element and the predefined key have been pressed,
           show the predefined message */
        if (mouseEnterFlag===true && theCharacter===data['theCharacter']){
            var theDiv = document.getElementById("the-div");
            var messageBlock =  data['modalBlock'].substring(0,82)+ data['messageStyle']
                                + data['modalBlock'].substring(83,182) + data['theMessage']
                                + data['modalBlock'].substring(193,211);
            console.log(data['theMessage']);
            theDiv.innerHTML = messageBlock;
        }
   };

});
