/*
Copyright (c) 2016 AshkanPH

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
$(document).ready(function(){
   $.ajax({
      type: 'post',
      url: "modalEasterEgg.json", // The address of modalEasterEgg.json file
      async: true,
      beforeSend: function (xhr) { // to prevent this warning: not well-formed json file
        if (xhr && xhr.overrideMimeType) {
          xhr.overrideMimeType('application/json;charset=utf-8');
        }
      },
      dataType: 'json',
      success: function (data) {
          var mouseEnterFlag = false;  // to know if mouse is over the element or not
          $("#"+data['theElement']).hover(function(){
              mouseEnterFlag = true;
            }, function() {
              mouseEnterFlag = false;
          });

          // when a key is pressed
          $(document).keyup(function(event){
              if (mouseEnterFlag == true){
                /* If mouse is over the element and 
                   the predefined key have been pressed, 
                   show the predefined message */
                if(String.fromCharCode(event.which) == data['theCharacter'].toUpperCase()){
                  var messageBlock =  data.modalBlock.substring(0,124) + 
                                      data.messageStyle +
                                      data.modalBlock.substring(125,294) + 
                                      data.theMessage +
                                      data.modalBlock.substring(295,368);
                  $("#the-div").html(messageBlock);
                  console.log(data['theMessage']);
                }
              }
          });
      }

   });

});
