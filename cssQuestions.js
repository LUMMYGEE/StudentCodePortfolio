const cssQuestions = [
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Colorful Style Syntax", "Creative Styling Sheets"],
    correct: 0
  },
  {
    question: "Which HTML tag is used to link an external CSS file?",
    options: ["<style>", "<css>", "<link>"],
    correct: 2
  },
  {
    question: "Which property controls text color in CSS?",
    options: ["font-color", "text-color", "color"],
    correct: 2
  },
  {
    question: "Which value of the position property makes an element stay in place when scrolling?",
    options: ["fixed", "absolute", "sticky"],
    correct: 0
  },
  {
    question: "Which CSS property is used to change the background color?",
    options: ["background-color", "bgcolor", "color"],
    correct: 0
  },
  {
    question: "Which CSS unit is relative to the root element?",
    options: ["rem", "em", "%"],
    correct: 0
  },
  {
    question: "Which of these is not a valid value for display?",
    options: ["block", "flex", "float"],
    correct: 2
  },
  {
    question: "How do you write a comment in CSS?",
    options: ["<!-- comment -->", "// comment", "/* comment */"],
    correct: 2
  },
  {
    question: "What is the default position value of an HTML element?",
    options: ["relative", "static", "absolute"],
    correct: 1
  },
  {
    question: "Which pseudo-class targets the first child of an element?",
    options: [":first", ":first-child", ":first-of-type"],
    correct: 1
  },

 {
    question: "Which property is used to make text bold in CSS?",
    options: ["font-style", "font-weight", "text-decoration"],
    correct: 1
  },
  {
    question: "How can you center a block element horizontally?",
    options: ["text-align: center", "margin: 0 auto", "align: center"],
    correct: 1
  },
  {
    question: "Which property changes the size of text?",
    options: ["font-size", "text-size", "size"],
    correct: 0
  },
  {
    question: "Which CSS property adds space inside an element?",
    options: ["margin", "border", "padding"],
    correct: 2
  },
  {
    question: "Which CSS property adds space outside an element?",
    options: ["margin", "padding", "spacing"],
    correct: 0
  },
  {
    question: "What does the 'z-index' property control?",
    options: ["Zoom level", "Stacking order", "Opacity"],
    correct: 1
  },
  {
    question: "Which property sets the transparency of an element?",
    options: ["opacity", "visibility", "alpha"],
    correct: 0
  },
  {
    question: "Which value makes an element invisible but still take up space?",
    options: ["display: none", "visibility: hidden", "opacity: 0"],
    correct: 1
  },
  {
    question: "What is the default display value for a <div> element?",
    options: ["inline", "block", "inline-block"],
    correct: 1
  },
  {
    question: "Which CSS property is used to underline text?",
    options: ["text-decoration", "font-style", "line-style"],
    correct: 0
  },
  {
    question: "Which selector targets all <p> elements inside <div>?",
    options: ["div p", "div.p", "div > p"],
    correct: 0
  },
  {
    question: "Which property changes the typeface of text?",
    options: ["font-type", "font-family", "text-type"],
    correct: 1
  },
  {
    question: "Which CSS function is used to set a gradient background?",
    options: ["gradient()", "set-gradient()", "linear-gradient()"],
    correct: 2
  },
  {
    question: "What does RGB stand for in CSS colors?",
    options: ["Red Green Black", "Red Green Blue", "Random Gradient Base"],
    correct: 1
  },
  {
    question: "Which symbol is used for class selectors in CSS?",
    options: ["#", ".", "*"],
    correct: 1
  },
  {
    question: "Which symbol is used for ID selectors in CSS?",
    options: ["#", ".", ":"],
    correct: 0
  },
  {
    question: "Which property removes the bullet from a list?",
    options: ["list-style", "text-decoration", "text-style"],
    correct: 0
  },
  {
    question: "Which property controls the outer border of an element?",
    options: ["outline", "border", "margin"],
    correct: 1
  },
  {
    question: "Which shorthand property sets all border values?",
    options: ["border-all", "border-style", "border"],
    correct: 2
  },
  {
    question: "Which selector targets an element with ID 'box'?",
    options: ["#box", ".box", "box"],
    correct: 0
  },
  {
    question: "Which selector targets elements with class 'item'?",
    options: ["#item", ".item", "item"],
    correct: 1
  },
  {
    question: "Which property makes a box's corners rounded?",
    options: ["border", "border-style", "border-radius"],
    correct: 2
  },
  {
    question: "Which of these units is relative to the parent element?",
    options: ["px", "em", "vh"],
    correct: 1
  },
  {
    question: "Which property defines shadow around a box?",
    options: ["box-shadow", "shadow-box", "element-shadow"],
    correct: 0
  },
  {
    question: "Which media feature is used for responsive design?",
    options: ["@media", "@responsive", "@breakpoint"],
    correct: 0
  },
  {
    question: "Which value of position allows element to scroll with page?",
    options: ["fixed", "absolute", "static"],
    correct: 2
  },
  {
    question: "Which keyword is used to apply styles to multiple elements?",
    options: ["group", "combine", "comma (,)"],
    correct: 2
  },
  {
    question: "How can you make an element full width of its container?",
    options: ["width: 100%", "display: block", "position: absolute"],
    correct: 0
  },
  {
    question: "Which shorthand sets margin in all four directions?",
    options: ["margin-all", "margin", "margin-total"],
    correct: 1
  },
  {
    question: "What is the default box model in CSS?",
    options: ["content-box", "border-box", "padding-box"],
    correct: 0
  },
  {
    question: "What does '!important' do in CSS?",
    options: ["Adds priority", "Disables rule", "Makes it optional"],
    correct: 0
  },
  {
    question: "What does 'inherit' do in CSS?",
    options: ["Ignores value", "Takes from parent", "Sets default"],
    correct: 1
  },
  {
    question: "Which pseudo-class targets hover state?",
    options: [":hover", ":active", ":focus"],
    correct: 0
  },
  {
    question: "Which property adds space between letters?",
    options: ["letter-spacing", "word-spacing", "line-height"],
    correct: 0
  },
  {
    question: "Which shorthand sets font-size, family, and style?",
    options: ["font", "font-all", "text"],
    correct: 0
  },
  {
    question: "What is the effect of 'display: none'?",
    options: ["Hides but keeps space", "Makes element invisible", "Removes element from layout"],
    correct: 2
  },
  {
    question: "Which property aligns text inside an element?",
    options: ["text-align", "align-text", "text-position"],
    correct: 0
  },
  {
    question: "Which property sets spacing between lines?",
    options: ["line-height", "line-spacing", "spacing"],
    correct: 0
  },
  {
    question: "Which value of 'overflow' adds scrollbars?",
    options: ["auto", "scroll", "hidden"],
    correct: 0
  },
  {
    question: "What is the use of 'max-width'?",
    options: ["Sets maximum container size", "Hides overflow", "Aligns element"],
    correct: 0
  }
];