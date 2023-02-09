# HTML5 Interview Questions

1. What is an iframe and how it works?
An iframe is an HTML document which can be embedded inside onther HTML page.
```
<iframe src="https://github.com" height="300px" width="300px"></iframe>
```
The <iframe> tag specifies an inline frame.

An inline frame is used to embed another document within the current HTML document.

Tip: Use CSS to style the <iframe>

Tip: It is a good practice to always include a title attribute for the <iframe>. This is used by screen readers to read out what the content of the <iframe> is.

2. What is the purpose of the alt attribute on images? 
The alt attribute provides alternative information for an image if a user cannot view it. The alt attribute should be used to describe any images except those which only serve a decorative purposes, in which case it should be left empty.

3. What is difference between span and div? 
-div is a block element
-span is inline element
For bonus points, you could point out that it’s illegal to place a block element inside an inline element, and that while div can have a p tag, and a p tag can have a span, it is not possible for span to have a div or p tag inside.

4. How can i get indexed better by search engines?
It is possible to get indexed better by placing the following two statements in the <HEAD> part of your documents:
```
<META NAME="keywords" CONTENT="keyword keyword keyword keyword">
<META NAME="description" CONTENT="description of your site">
```
Both may contain up to 1022 characters. If a keyword is used more than 7 times, the keywords tag will be ignored altogether. Also, you cannot put markup (other than entities) in the description or keywords list.

