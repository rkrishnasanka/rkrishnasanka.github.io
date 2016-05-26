---
layout: article
category: learningarticle
title: Opening Files in Java Script
description: Uses HTML and JS to open files and read their contents

---
# Tutorial Summary

When building desktop apps using HTML and JS there are often times one has to
open a file and read its contents. To do so we first have to create an HTML
input element, create a javascript event handler and a js file reader object to
finally read the contents of the file. The nice part about this is that it does
not require a server to upload. Since the javascript is written in the HTML
`<script>` tags, the entire code runs on the browser without needing a server.

## Step 1 - Create a the HTML input element

The HTML input element will allow the user to select the file from the
browser. This should be added to your page.html file.

```
  <input type="file" class="upload" id="input" />
```

## Step 2 - Create a Event handler

Event handler code consist of two parts:

1. Registering the handler
2. Callback function

Whenever a registered event occurs, the event handler code is executed.

Registering the event handler:

```
    // Reference for the html input element
    var inputElement = document.getElementById("input");

    // on change run the 'handleFiles' method
    inputElement.addEventListener("change", handleFiles, false);

```

Creating a handler function:

```
    function handleFiles() {
        var file = this.files[0]; /* now you can work with the file list */

        console.log(file.name); /* logged the filename */
        console.log(file.size); /* logged the filesize  */
        reader.readAsText(file); /* this will make sense in a bit */

    }

```

## Step 3 - Create a JS file reader object

When the `handleFiles` method is fired the `file` object has the path
information of the given selected in the `input` element. So now the contents
of the selected file can be read using the JS `FileReader` object.

Create the file reader

```
    var reader = new FileReader();
```

Register + Create an event handler for when the `FileReader` finishes reading
the file.

```
    reader.onload = function (e) {
        console.log(reader.result);
        /* Do something with the read reader.result */
    }

```
