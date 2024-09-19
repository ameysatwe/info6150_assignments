# INFO 6150 Web design

## Assignment 1 


## Favicon
    A Favicon is a small icon displayed in the tab of the browser. Generally used to display the logo of the website.

    <link rel="icon" href="./images/icon.png" type="image/png" />
    

## Table
Used to format data in a tabular layout with rows and columns
```
<table> // defines a table
  <tr> // defines a row
    <th>Header 1</th> // defines headers for table
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td> //data for first element
    <td>Data 2</td>
  </tr>
</table>
```

## Form
The ```form``` tag is used to collect user input using various input controls like buttons text fields,radio buttons etc
```
<form action="/submit">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>

```
## Images
The ```img``` tag is used to display images on the HTML page
```
<img src="./images/photo.jpg" alt="Description of the image" width="500" height="300">
```
## Hyperlink
The ```<a>``` or the anchor tag is used to create hyperlinks on the html page
```
<a href="https://example.com">Click here to visit example.com</a>
```
The href attribute points to the location to be visited by the click
## Button
The ```<button>``` tag creates a clickable button

## audio
The ```<audio>``` tag is used to embed audio files in the HTML document
## video
The ```<video>``` tag is used to embed video files in the HTML document
## header
The ```<header>``` HTML element represents introductory content, typically a group of introductory or navigational aids. 
## footer
The ```<footer>``` HTML element represents a footer for its nearest ancestor sectioning content or sectioning root element. A ```<footer> ```typically contains information about the author of the section, copyright data or links to related documents.
## summary
The ```<summary>``` HTML element specifies a summary, caption, or legend for a ```<details>``` element's disclosure box. Clicking the ```<summary>``` element toggles the state of the parent ```<details>``` element open and closed.
## menu
The ```<menu>``` HTML element is described in the HTML specification as a semantic alternative to ```<ul>```, but treated by browsers (and exposed through the accessibility tree) as no different than ```<ul>```. It represents an unordered list of items (which are represented by <li> elements).
## tel
A link can be made to point to telephone numbers using tel: in the href attribute of the ```<a href="mailto:satwe.a@northeastern.edu">``` tag.
## mailto for contact information
A link can be made to point to email id using mailto: in the href attribute of the ```<a href="mailto:satwe.a@northeastern.edu">``` tag.