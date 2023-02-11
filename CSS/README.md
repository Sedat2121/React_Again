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

