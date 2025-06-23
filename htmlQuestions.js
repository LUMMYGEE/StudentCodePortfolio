
// HTML Questions (70 total — shortened example)
const htmlQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperloop Machine Language"
    ],
    correct: 0
  },
  {
    question: "Which HTML tag is used to define a paragraph?",
    options: ["<p>", "<para>", "<text>"],
    correct: 0
  },
  {
    question: "What is the correct HTML tag for inserting a line break?",
    options: ["<br>", "<break>", "<lb>"],
    correct: 0
  },
  {
    question: "Which HTML element is used for the largest heading?",
    options: ["<h1>", "<heading>", "<head>"],
    correct: 0
  },
  {
    question: "Which tag creates a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>"],
    correct: 0
  },
  {
    question: "What does the <img> tag do?",
    options: [
      "Embeds an image",
      "Creates a form",
      "Styles the text"
    ],
    correct: 0
  },
  {
    question: "Which attribute is used to provide a tooltip in HTML?",
    options: ["title", "tooltip", "alt"],
    correct: 0
  },
  {
    question: "What tag is used to create an ordered list?",
    options: ["<ol>", "<ul>", "<li>"],
    correct: 0
  },
  {
    question: "What is the correct element for inserting a horizontal line?",
    options: ["<hr>", "<line>", "<hl>"],
    correct: 0
  },
  {
    question: "Which HTML tag is used to display a table?",
    options: ["<table>", "<tab>", "<tbl>"],
    correct: 0
  },

  // Questions 11–20
  {
    question: "Which tag is used to define a list item?",
    options: ["<li>", "<item>", "<list>"],
    correct: 0
  },
  {
    question: "Which element defines the document title?",
    options: ["<title>", "<head>", "<meta>"],
    correct: 0
  },
  {
    question: "Where should the <title> tag be placed?",
    options: ["Inside <head>", "Inside <body>", "After <html>"],
    correct: 0
  },
  {
    question: "What tag is used to make text bold?",
    options: ["<b>", "<strong>", "<bold>"],
    correct: 0
  },
  {
    question: "What tag is used to make text italic?",
    options: ["<i>", "<italic>", "<em>"],
    correct: 0
  },
  {
    question: "Which tag creates a checkbox?",
    options: ["<input type='checkbox'>", "<checkbox>", "<check>"],
    correct: 0
  },
  {
    question: "What is the correct syntax for an HTML comment?",
    options: [
      "<!-- comment -->",
      "// comment",
      "# comment"
    ],
    correct: 0
  },
  {
    question: "Which attribute specifies an image source?",
    options: ["src", "href", "link"],
    correct: 0
  },
  {
    question: "Which tag is used to create a drop-down list?",
    options: ["<select>", "<dropdown>", "<list>"],
    correct: 0
  },
  {
    question: "Which input type is used for passwords?",
    options: [
      "<input type='password'>",
      "<input type='pass'>",
      "<input type='secure'>"
    ],
    correct: 0
  },

  // Questions 21–30
  {
    question: "Which tag creates a text area?",
    options: ["<textarea>", "<textbox>", "<textinput>"],
    correct: 0
  },
  {
    question: "What does the 'alt' attribute provide in an <img> tag?",
    options: [
      "Alternative text for screen readers",
      "Image animation",
      "File format"
    ],
    correct: 0
  },
  {
    question: "Which HTML tag defines emphasized text?",
    options: ["<em>", "<i>", "<italic>"],
    correct: 0
  },
  {
    question: "Which HTML tag defines important text?",
    options: ["<strong>", "<bold>", "<important>"],
    correct: 0
  },
  {
    question: "What tag is used to group form controls?",
    options: ["<fieldset>", "<formgroup>", "<group>"],
    correct: 0
  },
  {
    question: "What does the <label> tag do?",
    options: [
      "Defines a label for an input element",
      "Adds a border",
      "Highlights text"
    ],
    correct: 0
  },
  {
    question: "Which tag defines a cell in a table?",
    options: ["<td>", "<tr>", "<cell>"],
    correct: 0
  },
  {
    question: "Which tag defines a table row?",
    options: ["<tr>", "<row>", "<table-row>"],
    correct: 0
  },
  {
    question: "Which HTML element defines the navigation links?",
    options: ["<nav>", "<menu>", "<navigation>"],
    correct: 0
  },
  {
    question: "Which HTML tag is used for inserting media like video?",
    options: ["<video>", "<media>", "<mp4>"],
    correct: 0
  },

  // Questions 31–40
  {
    question: "What tag is used to define a footer in a page?",
    options: ["<footer>", "<bottom>", "<foot>"],
    correct: 0
  },
  {
    question: "What does the <div> tag do?",
    options: [
      "Defines a division or section",
      "Creates a table",
      "Adds a hyperlink"
    ],
    correct: 0
  },
  {
    question: "Which HTML tag is used to define inline styles?",
    options: ["style", "css", "class"],
    correct: 0
  },
  {
    question: "Which tag defines a section in HTML5?",
    options: ["<section>", "<div>", "<article>"],
    correct: 0
  },
  {
    question: "Which tag is used to define metadata about a document?",
    options: ["<meta>", "<head>", "<info>"],
    correct: 0
  },
  {
    question: "What does the <head> tag contain?",
    options: [
      "Metadata and links to scripts/styles",
      "Main content",
      "User navigation"
    ],
    correct: 0
  },
  {
    question: "Which attribute sets the language of the document?",
    options: ["lang", "language", "xml:lang"],
    correct: 0
  },
  {
    question: "Which attribute is used to open a link in a new tab?",
    options: ["target='_blank'", "newtab", "open='new'"],
    correct: 0
  },
  {
    question: "Which tag is used for embedding external content like videos?",
    options: ["<iframe>", "<embed>", "<object>"],
    correct: 0
  },
  {
    question: "What does the <form> tag do?",
    options: [
      "Creates an HTML form for user input",
      "Starts a new section",
      "Formats a page layout"
    ],
    correct: 0
  },

  // Questions 41–50
  {
    question: "Which attribute is used to make an input required?",
    options: ["required", "mandatory", "validate"],
    correct: 0
  },
  {
    question: "Which tag is used to define a button?",
    options: ["<button>", "<btn>", "<input type='button'>"],
    correct: 0
  },
  {
    question: "Which tag defines the main content of the page?",
    options: ["<main>", "<body>", "<content>"],
    correct: 0
  },
  {
    question: "Which tag adds a numbered list?",
    options: ["<ol>", "<ul>", "<li>"],
    correct: 0
  },
  {
    question: "What tag is used to define a line of text that is struck through?",
    options: ["<s>", "<strike>", "<del>"],
    correct: 0
  },
  {
    question: "What does the 'action' attribute do in a <form>?",
    options: [
      "Specifies where to send form data",
      "Sets animation speed",
      "Defines a JavaScript function"
    ],
    correct: 0
  },
  {
    question: "What is the default method of a form?",
    options: ["GET", "POST", "PUT"],
    correct: 0
  },
  {
    question: "Which tag is used to define an abbreviation or acronym?",
    options: ["<abbr>", "<acronym>", "<short>"],
    correct: 0
  },
  {
    question: "What is the correct HTML tag for inserting an image?",
    options: ["<img>", "<image>", "<pic>"],
    correct: 0
  },
  {
    question: "What tag is used to add a caption to a table?",
    options: ["<caption>", "<title>", "<head>"],
    correct: 0
  },
  {
    question: "Which HTML5 element is used for sidebar content?",
    options: ["<sidebar>", "<aside>", "<nav>"],
    correct: 1  // <aside>
  },
  {
    question: "What is the correct HTML for creating a checkbox with 'Agree' label?",
    options: [
      "<label><input type='checkbox'> Agree</label>",
      "<checkbox>Agree</checkbox>",
      "<input type='check' label='Agree'>"
    ],
    correct: 0
  },
  {
    question: "Which attribute makes an input field required?",
    options: ["mandatory", "required", "validate"],
    correct: 1  // required
  },
  {
    question: "What tag is used for a clickable button?",
    options: ["<btn>", "<button>", "<click>"],
    correct: 1  // <button>
  },
  {
    question: "Which HTML element is used for important text?",
    options: ["<important>", "<strong>", "<bold>"],
    correct: 1  // <strong>
  },
  {
    question: "How do you create a dropdown with options 'Red', 'Green', 'Blue'?",
    options: [
      "<select><option>Red</option><option>Green</option><option>Blue</option></select>",
      "<dropdown><item>Red</item><item>Green</item><item>Blue</item></dropdown>",
      "<list><option>Red</option><option>Green</option><option>Blue</option></list>"
    ],
    correct: 0
  },
  {
    question: "Which tag is used for a line break without extra space?",
    options: ["<lb>", "<break>", "<br>"],
    correct: 2  // <br>
  },
  {
    question: "What does the <span> element do?",
    options: [
      "Creates an invisible container",
      "Adds horizontal space",
      "Groups inline elements for styling",
    ],
    correct: 2  // Groups inline elements
  },
  {
    question: "Which HTML5 element plays videos?",
    options: ["<movie>", "<video>", "<media>"],
    correct: 1  // <video>
  },
  {
    question: "What is the correct HTML for a radio button group?",
    options: [
      "<radio name='color'><option>Red</option></radio>",
      "<input type='radio' name='color'> Red",
      "<input type='checkbox' name='color'> Red"
    ],
    correct: 1  // input type='radio'
  },
  {
    question: "Which tag creates a numbered list?",
    options: ["<ul>", "<ol>", "<dl>"],
    correct: 1  // <ol>
  },
  {
    question: "What does the <mark> tag do?",
    options: [
      "Creates a bookmark",
      "Highlights text",
      "Inserts a marker icon"
    ],
    correct: 1  // Highlights text
  },
  {
    question: "Which attribute links a label to an input?",
    options: ["for", "link", "idref"],
    correct: 0  // for
  },
  {
    question: "What is the correct HTML for a tooltip on hover?",
    options: [
      "<div tooltip='Info'>Hover</div>",
      "<div title='Info'>Hover</div>",
      "<div hover='Info'>Hover</div>"
    ],
    correct: 1  // title
  },
  {
    question: "Which tag is used for a thematic break between sections?",
    options: ["<break>", "<hr>", "<line>"],
    correct: 1  // <hr>
  },
  {
    question: "What is the correct HTML for embedding a YouTube video?",
    options: [
      "<video src='youtube.com/...'>",
      "<iframe src='youtube.com/embed/...'>",
      "<embed url='youtube.com/...'>"
    ],
    correct: 1  // iframe
  },
  {
    question: "Which tag defines a header for a document or section?",
    options: ["<head>", "<header>", "<heading>"],
    correct: 1  // <header>
  },
  {
    question: "What does the <figure> tag represent?",
    options: [
      "A mathematical formula",
      "Self-contained content like images",
      "A decorative divider"
    ],
    correct: 1  // Self-contained content
  },
  {
    question: "Which input type is used for email validation?",
    options: [
      "<input type='email'>",
      "<input type='text' validation='email'>",
      "<input type='mail'>"
    ],
    correct: 0  // type='email'
  },
  {
    question: "What is the purpose of the <cite> tag?",
    options: [
      "To style text italic",
      "To define a creative work title",
      "To create a citation marker"
    ],
    correct: 1  // Defines work title
  }
];