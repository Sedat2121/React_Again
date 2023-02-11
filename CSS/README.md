# CSS Interview Questions

1. Three main ways to apply CSS?
```
Using the inline style attribute on an element

<div>
    <p style="color: maroon;"></p>
</div>
Using a <style> block in the <head> section of your HTML

<head>
    <title>CSS Refresher</title>
    <style>
        body {
            font-family: sans-serif;
            font-size: 1.2em;
        }
    </style>
</head>
Loading an external CSS file using the <link> tag

<head>
    <title>CSS Refresher</title>
    <link rel="stylesheet" href="/css/styles.css" />
</head>
```
2. What is CSS?
CSS stands for Cascading Style Sheets. CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.

CSS was intended to allow web professionals to separate the content and structure of a website's code from the visual design.

3. SASS 
Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable.
```
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

4. Explain CSS sprites, and how would you implement them on a page or site?

CSS sprites combine multiple images into one single larger image. It is commonly used technique for icons (Gmail uses it).

Use a sprite generator that packs multiple images into one and generate the appropriate CSS for it.
Each image would have a corresponding CSS class with background-image, background-position and background-size properties defined.
To use that image, add the corresponding class to your element.
Advantages:

Reduce the number of HTTP requests for multiple images (only one single request is required per spritesheet). But with HTTP2, loading multiple images is no longer much of an issue.
Advance downloading of assets that won’t be downloaded until needed, such as images that only appear upon :hover pseudo-states. Blinking wouldn't be seen.

5. Explain CSS box model and the layout components that it consists of?

The CSS box model is a rectangular layout paradigm for HTML elements that consists of the following:

Content - The content of the box, where text and images appear
Padding - A transparent area surrounding the content (i.e., the amount of space between the border and the content)
Border - A border surrounding the padding (if any) and content
Margin - A transparent area surrounding the border (i.e., the amount of space between the border and any neighboring elements)

6. CSS Flexbox and Grid specs:

Flexbox is mainly meant for 1-dimensional layouts while Grid is meant for 2-dimensional layouts.

Flexbox solves many common problems in CSS, such as vertical centering of elements within a container, sticky footer, etc. Bootstrap and Bulma are based on Flexbox, and it is probably the recommended way to create layouts these days. Have tried Flexbox before but ran into some browser incompatibility issues (Safari) in using flex-grow, and I had to rewrite my code using inline-blocks and math to calculate the widths in percentages, it wasn't a nice experience.

Grid is by far the most intuitive approach for creating grid-based layouts (it better be!) but browser support is not wide at the moment.

7. What is @extend directive?

Using @extend lets you share a set of CSS properties from one selector to another. It helps keep your Sass very dry.

Consider:
```
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

8. Key features of SASS?

Key features for Sass include;
Full CSS3-compatible
Language extensions such as nesting, variables, and mixins
Many useful functions for manipulating colors and other values
Advanced features like control directives for libraries
Well-formatted, customizable output

9. CSS class and ID attributes?

IDs — Meant to be unique within the document. Can be used to identify an element when linking using a fragment identifier. Elements can only have one id attribute.

Classes — Can be reused on multiple elements within the document. Mainly for styling and targeting elements.

10. What is the CSS rule?

Web browsers apply CSS rules to a document to affect how they are displayed. A CSS rule is formed from:

A set of properties, which have values set to update how the HTML content is displayed,
A selector, which selects the element(s) you want to apply the updated property values to.
A set of CSS rules contained within a stylesheet determines how a webpage should look.

11. What is SASS?

Sass or Syntactically Awesome StyleSheets is a CSS preprocessor that adds power and elegance to the basic language. It allows you to use variables, nested rules, mixins, inline imports, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized, and get small stylesheets up and running quickly.

A CSS preprocessor is a scripting language that extends CSS by allowing developers to write code in one language and then compile it into CSS.

12. CSS Frameworks?

Tailwind, Material UI, Foundation

Bootstrap - Slow release cycle. Bootstrap 4 has been in alpha for almost 2 years. Add a spinner button component, as it is widely used.

Semantic UI - Source code structure makes theme customization extremely hard to understand. Its unconventional theming system is a pain to customize. Hardcoded config path within the vendor library. Not well-designed for overriding variables unlike in Bootstrap.

Bulma - A lot of non-semantic and superfluous classes and markup required. Not backward compatible. Upgrading versions breaks the app in subtle manners.

13. Describe Floats and how it works?

Float is a CSS positioning property. Floated elements remain a part of the flow of the web page. This is distinctly different than page elements that use absolute positioning. Absolutely positioned page elements are removed from the flow of the webpage.
```
#sidebar {
  float: right; // left right none inherit			
}
The CSS clear property can be used to be positioned below left/right/both floated elements.
```

14. SASS nesting selector?

Sass let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. CSS, on the other hand, doesn't have any visual hierarchy.

Consider example (scss):
```
.parent {
  color: red;

  .child {
    color: blue;
  }
}
Result (css):

.parent {
  color: red;
}

.parent .child {
  color: blue;
}
```

15. DOM and CSS?

The Document Object Model (DOM) is a cross-platform and language-independent application programming interface that treats an HTML, XHTML, or XML document as a tree structure wherein each node is an object representing a part of the document.

With the Document Object Model, programmers can create and build documents, navigate their structure, and add, modify, or delete elements and content. The DOM specifies interfaces which may be used to manage XML or HTML documents.

When a browser displays a document, it must combine the document's content with its style information. The browser converts HTML and CSS into the DOM (Document Object Model). The DOM represents the document in the computer's memory. It combines the document's content with its style.

16. Data types which SASS support?

```
Sass supports seven main data types:

Numbers - most of the time they are accompanied by a unit of some sort but they are still technically numbers. You can perform basic mathematical operations on these values.
$size: 18;                  // A number
$px-unit: $size * 1px;      // A pixel measurement
$px-string: $size + px;     // A string
$px-number: $px-unit / 1px; // A number
Strings - just like CSS, accepts both quoted and unquoted strings, even if they contain spaces
$website: 'SitePoint'; // Stores SitePoint
$name: 'Gajendar' + ' Singh';  // 'Gajendar Singh'
$date:  'Month/Year : ' + 3/2016; // 'Month/Year : 3/2016'
$date:  'Month/Year : ' + (3/2016); // 'Month/Year : 0.00149' 
// This is because 3/2016 is evaluated first.
$variable: 3/2016;      // Evaluated to 0.00149
Colors - CSS color expressions come under the color data type. You can refer to the colors in hexadecimal notation, as rgb, rgba, hsl and hsla values or use native keywords like pink, blue, etc.
$color: yellowgreen;           // #9ACD32
color: lighten($color, 15%);    // #b8dc70
color: darken($color, 15%);     // #6c9023
color: saturate($color, 15%);   // #a1e01f
color: desaturate($color, 15%); // #93ba45
color: (green + red);           // #ff8000
Booleans - has only two possible values: true and false
$i-am-true: true;

body {
  @if not $i-am-true {
    background: rgba(255, 0, 0, 0.6);
  } @else {
    background: rgba(0, 0, 255, 0.6); // expected
  }
}
Null - is commonly used to define an empty state, neither true or false. This is typically the value you want to set when defining a variable without a value, only to prevent the parser from crashing.
.foo {
  content: type-of(null); // null
  content: type-of(NULL); // string
  $bar: 'foo' + null; // invalid null operation: "foo plus null”.
}
Lists - are just the Sass version of arrays. You can store multiple types of values in a list.
$font-list: 'Raleway','Dosis','Lato'; // Three comma separated elements
$pad-list: 10px 8px 12px; // Three space separated elements
$multi-list: 'Roboto',15px 1.3em; // This multi-list has two lists.
Maps - Sass maps are like associative arrays. A map stores both keys and values associated with those keys.
$styling: (
  'font-family': 'Lato',
  'font-size': 1.5em,
  'color': tomato,
  'background': black
);

h1 {
  color: map-get($styling, 'color');
  background: map-get($styling, 'background');
}
```
