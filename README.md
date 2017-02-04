# modalEasterEgg

modalEasterEgg is an easy-to-use modal [Easter Egg](https://en.wikipedia.org/wiki/Easter_egg_%28media%29) for web pages. modalEasterEgg **uses both mouse and keyboard events** and **uses a json file (modalEasterEgg.json) to load the options**. Options which can be changed are: id of a HTML element (one of your webpage elements), a character, your message and its CSS style. When the user goes over the element with the mouse and presses the predefined character from keyboard, the hidden message will be showed in a JavaScript modal.

There are two versions of modalEasterEgg:   
   1. With Bootstrap and JQuery    
   2. With JavaScript   


**Usage:**

All you need to do is:

**1.** All the settings is saved in a json file. You want to change the settings? No problem; Change them in the `modalEasterEgg.json`. Don't forget to put the modalEasterEgg.json in the proper address (default is the same folder of your webpages):

   * `theElement` → The ID of the HTML element for the mouse event.
   * `theMessage` → The text of your message (You can add HTML tags too).
   * `theCharacter` → The character for the keyboard event.
   * `messageStyle` → The CSS style for your message.
   * `modalBlock` → This is the modal block. Don't change it. Each version of modalEasterEgg (with pure JavaScript/with Bootsrtap and JQuery) uses different modalBlock.   

```json
   /*    This is  how  the  modalEasterEgg.json
          looks  like  (for the  pure JavaScript
          version). All the settings go here and
          can be changed easily.     */
   {
       "theElement": "my-element",
       "theCharacter": "i",
       "theMessage": "This was supposed to be my secret message.<br><br>How did you find it? :D",
       "messageStyle": "style='background-color:#F2DEDE;color:brown; font-size:1.3em; text-align:center;padding:25px;'",
       "modalBlock": "<div style='display:block;' id='myModal' class='modal'><div class='modal-content'  ><span class='close' onclick='this.parentElement.parentElement.style.display = \"none\";'>×</span><p>the message</p></div></div>"
   }
   ```

**2.** Add `modalEasterEgg.min.js` to your codes:
   ```html
   <script type="text/javascript" src="/your path here/modalEasterEgg.min.js"></script>
   ```

**3.** If you want to use the version with _**Bootstrap and JQuery**_, Add `bootstrap.min.css`, `bootstrap.min.js` and `jquery.min.js` to your webpages:

   ```html
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   ```

**4.** If you want to use the version with _**JavaScript**_, Add `modalEasterEgg.min.css` to your webpages.

   ```html
   <script type="text/javascript" src="/your path here/modalEasterEgg.min.css"></script>
   ```

**5.** Add `<div id="the-div"></div>` to the body of your webpages. Don't change the id.     



**Credits:**  
By Ashkan Paleganeh   


**License:**  
MIT License
