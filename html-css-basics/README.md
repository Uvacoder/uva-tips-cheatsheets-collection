# Basic HTML & CSS refresher

Some notes [HTML & CSS lessons from here](http://learn.shayhowe.com/html-css/)

- [Basic HTML & CSS refresher](#basic-html--css-refresher)
  * [Lessons](#lessons)
  * [1. Introduction](#1-introduction)
    + [HTML terms](#html-terms)
    + [self closing tags](#self-closing-tags)
    + [structure: `<doctype>`, `<head>`, `<body>`](#structure-doctype-head-body)
    + [HTML and CSS validation](#html-and-css-validation)
    + [CSS terms](#css-terms)
    + [referencing CSS](#referencing-css)
    + [CSS resets](#css-resets)
  * [2. Basic HTML](#2-basic-html)
    + [semantics - using the proper element](#semantics---using-the-proper-element)
    + [block](#block)
    + [inline](#inline)
    + [divs, spans](#divs-spans)
    + [headings](#headings)
    + [paragraphs](#paragraphs)
    + [`<b>`, `<strong>`, `<em>`](#b-strong-em)
    + [building structure](#building-structure)
    + [head vs header vs h1-h6](#head-vs-header-vs-h1-h6)
    + [div vs article vs section](#div-vs-article-vs-section)
    + [HMTL entities](#hmtl-entities)
    + [hyperlinks](#hyperlinks)
  * [3. Basic CSS](#3-basic-css)
    + [the cascade](#the-cascade)
    + [specificity](#specificity)
    + [combining selectors](#combining-selectors)
    + [layering styles](#layering-styles)
    + [colors](#colors)
    + [lengths](#lengths)
  * [4. The box model](#4-the-box-model)
    + [`display`](#display)
    + [the box model concept](#the-box-model-concept)
    + [width and height](#width-and-height)
    + [margin and padding](#margin-and-padding)
    + [margin](#margin)
    + [padding](#padding)
    + [margin and padding declaration](#margin-and-padding-declaration)
    + [margin and padding colors](#margin-and-padding-colors)
    + [borders](#borders)
    + [border-radius](#border-radius)
    + [box-sizing](#box-sizing)
    + [vendor prefixes](#vendor-prefixes)
    + [developer tools](#developer-tools)
    + [universal selector](#universal-selector)
  * [5. Positioning content](#5-positioning-content)
    + [positioning with floats](#positioning-with-floats)
    + [floating in practice](#floating-in-practice)
    + [clearing & containing floats](#clearing--containing-floats)
    + [clearing floats](#clearing-floats)
    + [containing floats (clearfix)](#containing-floats-clearfix)
    + [keep track of float and always clear/contain them](#keep-track-of-float-and-always-clearcontain-them)
    + [positioning with inline-block](#positioning-with-inline-block)
    + [inline block vs spaces](#inline-block-vs-spaces)
    + [creating a reusable layout](#creating-a-reusable-layout)
    + [uniquely positioning elements](#uniquely-positioning-elements)
    + [`position: relative`](#position-relative)
    + [`position: absolute`](#position-absolute)
  * [6. Typography](#6-typography)
    + [adding color to text](#adding-color-to-text)
    + [font-family](#font-family)
    + [font-size](#font-size)
    + [font-style](#font-style)
    + [font-variant](#font-variant)
    + [font-weight](#font-weight)
    + [line-height](#line-height)
    + [font shorthand](#font-shorthand)
    + [`:hover`](#hover)
    + [text-align](#text-align)
    + [text-decoration](#text-decoration)
    + [text-indent](#text-indent)
    + [text-shadow](#text-shadow)
    + [text-transform](#text-transform)
    + [letter-spacing](#letter-spacing)
    + [word-spacing](#word-spacing)
    + [web safe fonts](#web-safe-fonts)
    + [embedding web fonts](#embedding-web-fonts)
    + [quotes, citations](#quotes-citations)
  * [7. Backgrounds](#7-backgrounds)
    + [setting background color](#setting-background-color)
    + [setting background image](#setting-background-image)
    + [background repeat](#background-repeat)
    + [background position](#background-position)
    + [CSS3: Gradient backgrounds](#css3-gradient-backgrounds)
    + [CSS3: linear gradient](#css3-linear-gradient)
    + [CSS3: radial gradient](#css3-radial-gradient)
    + [CSS3: gradient color stops](#css3-gradient-color-stops)
    + [CSS3: multiple background images](#css3-multiple-background-images)
    + [CSS3: background size](#css3-background-size)
    + [CSS3: background clip and origin](#css3-background-clip-and-origin)
  * [8. Lists](#8-lists)
    + [unordered lists](#unordered-lists)
    + [ordered lists](#ordered-lists)
    + [description lists](#description-lists)
    + [nesting lists](#nesting-lists)
    + [list style type](#list-style-type)
    + [image as a list item marker](#image-as-a-list-item-marker)
    + [list-style-position](#list-style-position)
    + [list-style shorthand](#list-style-shorthand)
    + [horizontally displaying a list](#horizontally-displaying-a-list)
    + [floating list](#floating-list)
  * [9. Adding Media](#9-adding-media)
    + [adding images](#adding-images)
    + [image formats](#image-formats)
    + [image sizing](#image-sizing)
    + [positioning images](#positioning-images)
    + [image element vs background image](#image-element-vs-background-image)
    + [adding audio](#adding-audio)
    + [audio types, fallbacks](#audio-types-fallbacks)
    + [adding video](#adding-video)
    + [custom audio and video controls](#custom-audio-and-video-controls)
    + [adding inline frames](#adding-inline-frames)
    + [seamless iframes](#seamless-iframes)
    + [figures](#figures)
    + [figure caption](#figure-caption)
  * [10. Forms](#10-forms)
    + [initializing a form](#initializing-a-form)
    + [text fields](#text-fields)
    + [textarea](#textarea)
    + [radio buttons](#radio-buttons)
    + [checkboxes](#checkboxes)
    + [dropdown lists](#dropdown-lists)
    + [submit input](#submit-input)
    + [submit button](#submit-button)
    + [hidden input](#hidden-input)
    + [file input](#file-input)
    + [labels](#labels)
    + [fieldsets](#fieldsets)
    + [legend](#legend)
    + [`disabled` attribute](#disabled-attribute)
    + [`placeholder` attribute](#placeholder-attribute)
    + [`required` attribute](#required-attribute)
    + [additional attributes](#additional-attributes)
  * [11. Tables](#11-tables)
    + [table, table rows and cells](#table-table-rows-and-cells)
    + [table heading](#table-heading)
    + [table caption](#table-caption)
    + [table head, body and foot](#table-head-body-and-foot)
    + [combining multiple cells](#combining-multiple-cells)
    + [`border-collapse`](#border-collapse)
    + [border-spacing](#border-spacing)
    + [adding borders to rows](#adding-borders-to-rows)
    + [striping tables](#striping-tables)
    + [aligning text in table cells](#aligning-text-in-table-cells)
  * [12. Best Practices](#12-best-practices)
    + [HTML best practices](#html-best-practices)
    + [CSS best practices](#css-best-practices)
    + [additional resources](#additional-resources)
      - [HTML & CSS](#html--css)
      - [design inspiration](#design-inspiration)
      - [frameworks & style guides](#frameworks--style-guides)
      - [icons](#icons)
      - [miscellaneous](#miscellaneous)

## 1. Introduction

### HTML terms

* element: `a`
* tag: `<a>..</a>`
* attribute: e.g. href `<a href="http://shayhowe.com/">Shay Howe</a>`

### self closing tags

```html
<br> <embed> <hr> <img> <input> <link> <meta> <param> <source> <wbr>
```

### structure: `<!DOCTYPE>`, `<head>`, `<body>`

```html
<!DOCTYPE html>
<html lang="en">
  <head></head>
  <body></body>
</html>
```

### HTML and CSS validation

do it

### CSS terms

* selector: `p` (type selector), `.class`, `#id`
* property: `p { font-size: ...; }`
* value: `p { font-size: 16px; }`

### referencing CSS

preferably single file, in head

```html
<head>
  <link rel="stylesheet" href="main.css">
</head>
```

### CSS resets

* reset browser defaults
* has to come at the top of your CSS file
* popular: [Eric Meyer’s reset](http://meyerweb.com/eric/tools/css/reset/)
* Normalize.css - more advanced

## 2. Basic HTML

### semantics - using the proper element

* read [this post](http://boagworld.com/dev/semantic-code-what-why-how/)
* screen readers, seo, shorter code, easier styling

### block

* block-level elements begin on a new line
* stacking one on top of the other
* occupy any available width
* may be nested inside one another and may wrap inline-level elements
* larger pieces of content, such as paragraphs

### inline

* inline-level elements do not begin on a new line
* they fall into the normal flow of a document, lining up one after the other
* only maintain the width of their content
* inline-level elements may be nested inside one another
* however, they cannot wrap block-level elements
* smaller pieces of content, such as a few words

### divs, spans

* solely for styling, no semantic value
* with class or id for layout, styling
* class or id value should not conatin styling references but meaning (e.g orange vs social)
* `div` block element, large groupings of content
* `span` inline element, smaller groupings of text
* HTML comments start with `<!-- and end with -->`
* CSS comments start with `/* and end with */`

### headings

* block-level elements
* six different rankings, `<h1>` through `<h6>`
* break up content and establish hierarchy
* not to increase font size (your CSS reset prevents that anyways)

### paragraphs

* block level
* pretty self explanatory

### `<b>`, `<strong>`, `<em>`

* `<strong>` - strong importance
* `<b>` - stylistically offset
* `<em>` - italicise text, thereby placing emphasis on it

### building structure

* `div`s have no semantic value, but HTML introduces structural elements
* `<header>`, `<nav>`, `<article>`,
* `<section>`, `<aside>`, and `<footer>`

### head vs header vs h1-h6

* header - structural element, outlines the heading of a segment of a page
* header could include a heading, introductory text, maybe even nav
* head - not displayed on a page, outlines metadata
* h1-h6 - multiple levels of text heading throughout the page

### div vs article vs section

* div - solely styling, no value to the outline of the document
* article - content could stand on it's own, can be redistributed independently
* section - thematic grouping of content

### HMTL entities

* begin with an ampersand `&` and end with a semicolon `;`
* name or numeric code between
* [copypastecharacter.com](http://copypastecharacter.com/)

### hyperlinks

* `a` - anchor, link from one web page or resource to another
* inline element - but the only one which can wrap a block element (HTML5)
* href (hyperlink reference) attribute, required, specifies destination
* relative path vs absolute urls
* mailto: links, with subject, body, cc
* `target="_blank"` opens link a new window
* link to part of the same page: id attribute on element, then `<a>` with `href=id-value`

## 3. Basic CSS

### the cascade

* styles cascade from the top of a style sheet to the bottom
* styles are added or overwritten, latter takes precedence

### specificity

* calculated using **specificity point** values
* id selectors - class selectors - type selectors
* type selector: lowest 0-0-1
* class selector: medium 0-1-0
* id selector: highest 1-0-0
* three columns for selector counts
* higher specificity wins even if it appears earlier in the stylesheet

### combining selectors

* multiple selectors can be specified
* **key selector** - rightmost, straight before the `{`
* **prequalifiers** - all the other left to the key selector
* no space between selectors - e.g type.class not best practice (type element with class) - just use class
* specificity weights added up per selector type

### layering styles

* use multiple classes (space separated in HTML)
* helps keeping specificity weights low

### colors

* defined in the sRGB color space
* 4 ways to represent them: keywords, hexadecimal, RGB and HSL
* keywords mapped to rgb values (e.g. `black` is `rgb(0, 0, 0)`)
* hexa: six character notation - 2 chars for r, g, b respectively, 0 black, f white
* [Adobe Kuler](https://kuler.adobe.com/)
* rgb() function: with 3 params 0-255, 0 black, 255 white
* rgba() function: rgb + alpha 0-1 with decimal, 0 transparent, 1 opaque
* hexa was really popular, now rgba gaining popularity
* hsl() function: 3 params, not all browsers support it
* hue: 0-360, color wheel degree
* saturation: 0-100%, 0 greyscale, 100 fully saturated
* lightness: 0-100%, 0 black, 100 white
* hsla() function: HSL + alpha

### lengths

* absolute or relative with different units
* pixels: `px`, absolute, 96 pixels in an inch but exact measurement may vary
* relative: rely on the length of another measurement
* percentages: `%`, relative, defined in relation to the length of another object, e.g. parent element
* `em`: calculated based on an element’s font size, 1 em = element's font size pixels
* when a font size is not explicitly stated for an element, the `em` unit will be relative to the font size of the closest parent element with a stated font size

## 4. The box model

### `display`

* determines how elements are displayed (block, inline and more)
* every element has a default display property value which can be overwritten
* common values are block, inline, inline-block, and none
* `inline-block`: allow an element to behave as a block-level element (accepting all box model properties) but displayed inline with other elements
* `none` completely hides an element and render the page as if that element and nested elements doesn’t exist

### the box model concept

* every element on a page is a rectangular box and may have width, height, padding, borders, and margins
* the core of the box is defined by the width and height of an element
* the width and height of an element may be determined by the display property, by the contents of the element, or by specified width and height properties
* padding and then border expand the dimensions of the box outward from the element’s width and height.
* any margin we have specified will follow the border.
* each part of the box model corresponds to a CSS property: width, height, padding, border, and margin.
* total width = margin-right + border-right + padding-right + width + padding-left + border-left + margin-left
* total height = margin-top + border-top + padding-top + height + padding-bottom + border-bottom + margin-bottom

### width and height

* every element has default width and height (might be 0px)
* `width` and `height` may be specified - **but only for non-inline elements**
* **block width**: block-level elements have a default width of 100%, consuming the entire horizontal space available
* **inline width**: inline and inline-block elements expand and contract horizontally to accommodate their content
* **height**: all elements expand and contract vertically to accommodate their content
* inline-level elements cannot have a fixed size, (no width and height is accepted)

### margin and padding

* browsers have their own default margin and padding
* a CSS reset tones the default down to zero and build up our own margin and padding

### margin

* `margin`: set the amount of space that surrounds an element
* the margin outside of any border and are completely transparent in color
* vertical margins, top and bottom, are not accepted by inline-level elements
* margins work like normal for block and inline-block elements

### padding

* provide spacing directly within an element
* falls inside of an element’s border
* padding works vertically on inline-level elements
* inline vertical padding may blend into the line above or below the given element
* padding works like normal for block and inline-block elements

### margin and padding declaration

* shorthand with 1 value: setting it on all four sides
* shorthand with 2 values: top and bottom first, then left and right
* shorthand with 4 values: top, right, bottom, and left, moving clockwise
* longhand: e.g margin-top, padding-left
* use longhand for 1 or 2 values
* use shorthand for 3 or more

### margin and padding colors

* they are completely transparent and don't accept any color values
* they show the background colors of relative elements (since they're transparent)
* margins - background color of the parent element
* padding - background color of the element the padding is applied to

### borders

* fall between the padding and margin, outline around the element
* has width, style, and color (shorthand order or border-width, etc)
* width, color: standard length and color values
* style: solid, double, dashed, dotted, and none
* individual borders and properties can also be specified: border-top, border-left-width

### border-radius

* enables rounded corners
* accepts length units: radius by which the corners of an element are to be rounded
* one value shorthand: all corners
* two values shorthand: top-left/bottom-right and top-right/bottom-left
* four values shorthand: clockwise, starting from top-left
* longhand: e.g border-top-right-radius

### box-sizing

* additive by default
* CSS3 introduces `box-sizing`
* values: content-box, padding-box, and border-box
* content-box: actual width, height: element width, any margin, padding border added on top
* padding-box: actual width, height: element width + padding (width 400 + 20 padding will be 400 px wide)
* border-box: actual width, height: element width + padding + border (width 400 + 20 padding + 5 px border will be 400 px wide)
* use border-box to make maths simpler (also helps when mixing percentages with px)
* drawback of using box-sizing: older browser don't support it


### vendor prefixes

* browsers gradually began to support different CSS3 properties and values by the way of vendor prefixes (e.g `-webkit-box-sizing`)
* as parts of the CSS3 specification are finalized and new browser versions are released, these vendor prefixes become less and less relevant
* Mozilla Firefox: -moz-
* Microsoft Internet Explorer: -ms-
* Webkit (Google Chrome and Apple Safari): -webkit-

### developer tools

- Chrome: Alt+Cmd+I

### universal selector

* universal selector: *  - catch-all to select all elements
* :before and :after pseudo-elements: dynamically generated with CSS

## 5. Positioning content

### positioning with floats

* the float property allows us to take an element, remove it from the normal flow of a page
* and position it to the left or right of its parent element
* all other elements on the page will then flow around the floated element
* used on multiple elements: creating a layout by floating elements directly next to or opposite each other
* multi-column layouts can be created

### floating in practice

* common float values are: `left` and `right`
* floated elements will float all the way to the edge of its parent element
* no parent: floated element floats to the edge of the page
* floated element width defaults to the width of the content within it
* use the `width` property to specify width
* use `margin` to prevent elements touching each other
* floated inline elements change their display value to block and accept width, height

### clearing & containing floats

* floats have pitfalls, originally for wrapping content around images and not layout
* styles next to a parent of a floated element might break
* margin and padding can blend into a floated element
* unwanted content can wrap around floated content

### clearing floats
* to prevent unwanted content from wrapping around floated elements, we need to clear, or contain, those floats
* clearing floats returns the page to its normal flow
* `clear` property, values: `left`, `right`, `both`
* left clear left floats, right clear right floats, both clears both sides
* clear property applied on an element after floated elements to return the page to it's normal flow

### containing floats (clearfix)

* effects similar to clearing (return to normal flow) but also makes sure styles are rendered correctly
* to contain floats, the floated elements must have a parent (container)
* the flow of the document will remain unaffected outside of the container
* containing everything within element with class `group`:

```css
.group:before,
.group:after {
  content: "";
  display: table;
}
.group:after {
  clear: both;
}
.group {
  clear: both;
  *zoom: 1;
}
```
* :before and :after pseudo-elements
* dynamically generated elements above and below the element with the class of group
* with no content but styles to clear floats
* also known as clearfix but the class group better represents the content

### keep track of float and always clear/contain them

### positioning with inline-block

* `display: inline-block`: placing elements next to one another within a line
* but also accepts width, height, padding, border, margin (as opposed to inline)
* taking full advantage of the box model without having to worry about clearing any floats


### inline block vs spaces

* inline-block elements are displayed on the same line, they also include a single space between them
* low tech, simple solution: no space between start and end tags
* another low tech solution: s tart HTML comment after end tag, close comment before start tag

### creating a reusable layout

* best to write modular styles that may be reused elsewhere
* floats vs inline-block is open to debate
* one approach:  inline-block elements to create the grid—or layout—of
* and float to wrap around content (as originally intended)
* new CSS specs: watch out for `flex-` and `grid-` based properties—that

### uniquely positioning elements

* precisely positioning elements: floats or inline-block might not do the job
* typically, most positioning can be handled without this
* can use the `position` property with box offset properties
* position: how an element is positioned on a page, if it appears in the normal flow of the document
* box offset properties moving elements to `top right bottom` or  `left`
* default position value is `static`
* `static` means the element appears in the normal flow and doesn't accept box offset properties
* other position values are: relative and absolute

### `position: relative`

* element appears within the normal flow a page
* leaving space for an element as intended
* also allows an element’s display position to be modified with the box offset properties
* box offset properties identify where an element will be moved from given its original position
* e.g. left: 20px - pushes element to the right by 20px

### `position: absolute`

* element does not appear within the normal flow a page
* original space and position of the element is not preserved
* elements are moved in relation to their closest relatively positioned parent element
* should a relatively positioned parent element not exist, the element will be positioned in relation to the <body> element

## 6. Typography

* embedded fonts allow using any font you like but important to learn about typography
* typeface is what we see, how text looks, feels, and reads, the artistic value
* font: the file containing a typeface, method of delivering artistic value

### adding color to text

* `color` property
* add it to body element to set the color for all text on the page

### font-family

* which font to use
* comma separated font names, left to right fallback
* font names with multiple word to be wrapped in double quotes
* last font should be a keyword, system default font for e.g. either `sans-serif` or `serif`

### font-size

* can be set using common length values

### font-style

* normal, italic, oblique, and inherit

### font-variant

* normal, small-caps, and inherit

### font-weight

* how bold is our text
* keyword values: normal, bold, bolder, lighter, and inherit
* or numeric values: 100, 200, ... 900 (from thinnest to thickest)
* normal = 400, bold = 700
* check that the font comes with a specific weight before using a value, otherwise falls back to closest

### line-height

* the distance between two lines of text (leading)
* typically just set it to 1.5 times font-size, using value 1.5 or 150%
* or if using a baseline grid might want to specify in pixels
* may also be used to vertically center text within an element (buttons, alerts, other single line text)

### font shorthand

* `font: font-style font-variant font-weight font-size/line-height font-family, font-family`
* everything optional apart from font-size and font-family

### `:hover`

* pseudo-selector
* maybe added at the end of a selector to style when an element is in a specific state
* `:hover` pseudo-class styles an element when a user hovers over that

### text-align

* five values: left, right, center, justify, and inherit

### text-decoration

* none, underline, overline, line-through, and inherit
* multiple values may be specified with space separation

### text-indent

* indent first line of text
* accepts length values
* positive value indents inwards, negative outwards

### text-shadow

* params: the shadow’s horizontal offset, vertical offset, blur radius, color (opacity as well, e.g rgba)
* positive offsets right and bottom,  negative offsets left and top
* multiple shadow can be specified as comma separated
* `box-shadow` accepts same values plus optional fourth length: spread, + optional first value: inset

### text-transform

* changes text inline without the need for typeface variant (not like font-variant)
* values: none, capitalize, uppercase, lowercase, and inherit
* capitalize makes first letter uppercase

### letter-spacing

* adjust the space (or tracking) between the letters on the page
* positive - further apart, negative - closer
* use relative value to ensure it works across different font sizes

### word-spacing

* spacing between words

### web safe fonts

* few fonts pre-installed on every device
* Arial
* Courier New, Courier
* Garamond
* Georgia
* Lucida Sans, Lucida Grande, Lucida
* Palatino Linotype
* Tahoma
* Times New Roman, Times
* Trebuchet
* Verdana

### embedding web fonts

* upload fonts to a server (check font lincence!)
* include them on a website via the CSS `@font-face` at-rule
* surround embedded font-family name with quotation marks within any CSS reference
* [Google Fonts](https://www.google.com/fonts)

```css
@font-face {
  font-family: "Lobster";
  src: local("Lobster"), url("lobster.woff") format("woff");
}
```

### quotes, citations

* `<cite>` - reference a creative work, author, or resource (typically title, author, URL)
* `<q>` -  short, inline quotations, inline
* `<blockquote>` -  longer external quotations, block
* q, blockquote: the browser will insert the proper quotation marks (it even respects the global lang attribute)
* q, blockquote: optional cite attribute - doesn't change appearance
* blockquote can usually include citation: both cite attrubite and cite element

## 7. Backgrounds

* Backgrounds can be a solid color, an image, a gradient, or these combined.
* `background` - shorthand for setting background properties

### setting background color

* background-color: accepts color values (or use background shorthand)
* transparent backgrounds (hsla, rgba) - might not be supported by all browsers, specify two background-color props, a safe fallback color first

### setting background image

* background-image: (or background shorthand) - accepts image source identified by url() function (usual href rules, needs to be quouted)

### background repeat

* a background image repeated indefinitely, both vertically and horizontally to fill up the element (if image is smaller)
* `background-repeat property`: repeat, repeat-x, repeat-y, and no-repeat

### background position

* background images are positioned in the top-left corner by default
* `background position`: horizontal offset vertical offset
* shorthand: use one value and it'll apply both vertically and horizontally
* can also use percentages and `top, right, bottom, left` keywords
* 0 0 is the same as top left, 100% 0 is top right, 100% 100% is bottom right
* advantage of percentages: 50% - centering
* `background:` shorthand: color, image, position, repeat values - space separated

### CSS3: Gradient backgrounds

* CSS3, supported by all modern browsers
* most browser no longer require vendor prefixes for this but worth adding them just in case

### CSS3: linear gradient

* linear-gradient() function within the background or background-image property
* linear-gradient() function accepts two values: start and end color, browser takes care of transition
*  -webkit-linear-gradient() -moz-linear-gradient()
* always specify a solid fallback color before the gradient (in a separate property)
* also supports direction as first argument (degree (0-360) e.g. 45deg, or keyword e.g. `to right bottom`)

### CSS3: radial gradient

* radial-gradient() function
* from inside to outside of an element
* paramaters include location, size, radius, and so on
* there are a number of CSS3 gradient generators to help out

### CSS3: gradient color stops

* gradient functions are like varargs
* multiple colors comma separeted at the end
* by default color stops are at equal distance but it can also be specified: color distance-in-percentage, next-color distance

### CSS3: multiple background images

* since CSS3 background or background-image accepts multiple comma separated bacgkround images
* first image comes foremost, last in the background

### CSS3: background size

*  `background-size` property - accepts two lengths
* `auto` keyword value for one of the parameters to keep aspect ratio
* percentage values are in relation to the element's size and not the image
* `cover` keyword value: resize background image to cover element (might be cut off)
* ``contain` keyword value: resize to fit into the element (might not occupy the full element)

### CSS3: background clip and origin

* `background-clip` - surface area a background image will cover
* `background-origin` - where the background-position should originate
* border-box, padding-box, and content-box keyword values may be used for both of these
* background-clip: border-box by default, background image can extend into any border
* background-origin: padding-box by default, beginning of a background image can extend into the padding

## 8. Lists

HTML has 3 types of lists: unordered, ordered, and description lists

### unordered lists

* `<ul>` unordered list block-level element
* `<li>` list items
* by default most browsers add a solid dot list item marker and margin and padding

### ordered lists

* `<ol>` ordered list element
* works pretty much similarly to `<ul>` but order matters
* by default most browser use numbers as list item markers
* `start` attribute on `<ol>` element tells where to start counting from (e.g paginated list)
* `start` attribute only accepts integers
* `reversed` boolean attribute (no value required, present=true) tells if the numbers should be in reverse order
* `value` attribute on an individual `<li>` within an `<ol>` changes its value within the list
* any item appearing after the one with the value is calculated accordingly

### description lists

* description lists are used to outline multiple terms and their descriptions (e.g. glossary)
* description list block-level element, `<dl>`
* an item consists of one or more description terms `<dt>` followed by one or more descriptions `<dd>`
* in most browsers by default, the <dl> element will include vertical margins and the <dd> element includes a left margin

### nesting lists

* always start the new list within an li and should be fine

### list style type

* the `list-style-type` property sets the content of a list item marker
* can change both unordedered and ordered list to anything you like
* common values: none, disc, circle, square, decimal, decimal-leading-zero, lower-roman, upper-roman, lower-greek, lower-alpha / lower-latin, upper-alpha / upper-latin

### image as a list item marker

* set list-style-type to none
* add small backround image (0 50% no-repeat)
* add padding-left to push content right

### list-style-position

* list-style-position property can have values: inside, outside, inherit
* default is outside - no content is wrapped around the marked


### list-style shorthand

* list-style-type followed by list-style-position - space separated

### horizontally displaying a list

* make `<li>`s inline-block
* marker is automatically set to none
* single spaces can be removed by adding comment between lis
* inline-block is better than inline as allows specifying margins, paddings

### floating list

* changing to inline-block or inline removes the marker
* floating keeps to marker
* need to add margin or padding to prevent markers overlapping content
* always clear or contain floats

## 9. Adding Media

### adding images

* `<img>` inline element
* img element is a self-containing or empty element, single, doesn't wrap around any content
* src attribute and value must exist with a valid URL
* alt (alternative text) attribute, which describes the contents of an image
* alt text is picked up by search engines, assistive technologies and also displayed if the image can't be

### image formats

* most commonly supported formats are gif, jpg, and png
* jpg format provides quality images with high color counts but still decent file size (e.g photos)
* png format is great for images with transparencies or low color counts (e.g. icons)

### image sizing

* important to tell the browser the size of the image evene before it's loaded - so it can reserve space for it and render faster
* img tag accepts width and height attributes in HTML
* CSS width and height overrides inline width and height
* setting only width or height automatically adjusts the image size preserving aspect ratio
* setting both works as well, might distort the image
* setting width and height in HTML might have some semantic value but images usually resized in CSS

### positioning images

* by default appears in the same line as the content surrounding it (inline)
* increases the height of the line it appears to match image height
* when set to `display: block` then in it;s own line (as usual)
* or flush left or right (by floating - it's original purpose)
* usually need margin around a floated image (can also create a frame with background, padding)

### image element vs background image

* use `<img>` if image holds semantic value and relevant to the content of the page
* use background image when image is part of design or UI and not directly relevant

### adding audio

* src attribute sepcifying source URL
* requires a closing tag
* several other attributes like autoplay, controls, loop (all boolean, no value just key required, attribute names self-explanatory)
* if controls attribute is not present nothing is displayed
* preload attribute - values: none, auto (default, all data preloaded), metadata (any metadata, e.g length)

### audio types, fallbacks

* different browsers support different formats
* we can get rid of the src attribute and wrap a number of `<source>` elements with an audio tag
* source element have `src` and `type` (e.g. audio/ogg, audio/mpeg) attributes
* browser picks the one it recognizes
* as last fallback arbitrary HTML can be added
* media.io, mirovideoconverter for conversion

### adding video

* pretty similar to audio but with the video element
* same src, autoplay, controls, loop, preload and fallback mechanism
* displayed, even if controls is not present
* size to be specified in CSS (using width and height properties)
* poster attribute accepts an image URL to be shown before the video is played
* an additional fallback option miht be a Youtube or Vimeo iframe

### custom audio and video controls

* by default controls are browser specific
* custom look and feel can be added with javascript

### adding inline frames

* embedding another HTML page in the current one
* iframe element, src attribute specifies the URL, may be relative to current page

### seamless iframes

* iframe contents don't inherit styles from the page including them
* links are opened within the frame
* `seamless` boolean attribute changes above behaviour (but not supported by older browsers)

### figures

* `<figure>`, block-level, identify and wrap self-contained content, often media
* may surround image, video, etc, or multiple of those (if they form a group)
* if the figure element is moved it shouldn't disrupt the content of the page

### figure caption

* `<figcaption>` element adds caption within a figure element
* may appear before or after media, or anywhere within figure but only once
* serves as caption for all content within the figure element
* may also be used to replace img elements alt attribute

## 10. Forms

* forms aquire user input
* different elements are used to capture different types of data

### initializing a form

* `<form>` element wraps all the elements included in the form
* `action` attribute: URL where the form should be sent to
* `method` attribute: HTTP method used for submitting the form

### text fields

* `<input>` element with `type` attribute value `text`
* `name` attribute is used as the name of the control and also sent to the server
* input element is self contained
* originally the only type attribute values were text and password
* HTML5 adds the following for semantic clarity: color, date, datetime, email, month, number, range, search, tel, time, url, week
* iOS might make user input for some of these easier

### textarea

* `<textarea>` element, capture multiline text input
* no `type` attribute as it only supports text
* `name` attribute is similar to input element
* two sizing attributes (`cols` and `rows`) but use CSS width and height instead

### radio buttons

* allow user to make quick choice from a small list of options
* only one option can be choosen
* `<input>` element with `type="radio"`
* `value` attribute specifies to value sent to the server
* `name` attribute should be the same for all checkboxes in a group
* `checked` boolean atrribute can be used to pre-select an option
* input is still self-closing, value seen by user is outside it: `<input type="radio" name="day" value="Friday" checked> Friday`

### checkboxes

* really similar to radio buttons, but
* allows multiple choice, all values are sent to the server
* `<input>` with `type="checkbox"`

### dropdown lists

* when you have a longer list of options
* a `<select>` element wraps all of the options marked up by `<option>` elements
* the `name` attribute is on the select element
* the `value` attribute is on the option element
* the option element wraps the user visible text
* selected boolean attribute marks the selected options
* boolean attribute `multiple` on select element allows multiple selection
* size of select element can be controlled via CSS

### submit input

* submit button can be added using input with `type="submit"`
* value attribute specifies button text

### submit button

* submit input is self contained, can't wrap more content
* button element performs the same but not self-closing like input
* can wrap button text (no value attrubite needed)

### hidden input

* input with `"type="hidden"` is not shown on the page but still submitted
* can obviously still be viewed in page source, so not for secure stuff

### file input

* input with `"type="file"` can be used to attach files to a form
* each browser comes with default styles for this, which can't be overriden CSS, JS help here

### labels

* provide caption or headings for from controls
* using `<label>` element with `for` attribute matching the `id` attribute of the form element
* clicking the label brings the linked form element into focus
* label may also wrap input elements and in this case the `for` and `id` atrributes may be omitted

### fieldsets

* group related form controls and label by wrapping them with `<fieldset>`
* block level element, default CSS has a border

### legend

* `<legend>` element provides caption or heading for `fieldset` element
* should be the first element after the opening `fieldset` tag
* appears on the top left of the fieldset border

### `disabled` attribute

* turns of element of control so that it's not interactive and values are not sent to the server
* can be applied to input or fieldset (form?)
* if input has type hidden and the disabled attribute as well then hidden is ignored

### `placeholder` attribute

* HTML 5 attribute, provides hint
* disappears as soon as the control is clicked or gains focus (hence different from `value`)
* `value` for prepopulating data and `placeholder` for suggestions

### `required` attribute

* boolean attribute introduced in HTML5
* enforces that form control contains a value before submitting
* error message is shown if no value but currently the browsers control the error message styling
* invalid elements and form controls can be styled using `:optional` and `:required` pseudo classes
* validation also respect input types (e.g. `type="email"` should be a valid email)

### additional attributes

```
accept autocomplete autofocus formaction formenctype formmethod formnovalidate formtarget max maxlength min pattern readonly selectionDirection step
```

## 11. Tables

* to mark up structured, tabular data
* was abused back when didn't all support CSS

### table, table rows and cells

* table content is wrapped in a `<table>` element
* a table may contain many rows that are marked up with the `<tr>` element
* table cells are added into rows using the `<td>` element

### table heading

* using the `<th>` element instead of td marks a cell as a table header
* table header adds semantic value to the content
* `scope` atribute on a th specifies the what the header relates to
* potential scope values are `col`, `row`, `colgroup`, and `rowgroup`
* the headers attribute may be used to associate a cell to a header
* above is done by specifying the linked `<th>`'s id attribute in the cell's (td or th) headers attribute

### table caption

* provides a title for the table using the `<caption>` element
* the caption element has to be the first element after the opening table tag

### table head, body and foot

* content of a table maybe broken to groups: head, body and foot
* `<thead>` element wraps the heading row(s) of the table and comes after any caption and before any tbody elements
* `<tbody>` element wraps the primary data rows
* `<tfoot>` element wraps the rows outlining the table
* before HTML5 tfoot had to come directly after thead

### combining multiple cells

* td or th can have a `colspan` or `rowspan` attribute
* colspan specifies how many columns the cell should span across (default is one)
* rowspan is the same as colspan but for rows

### `border-collapse`

* adding border to table-cell can cause borders stacking up (on the inside)
* `border-collapse` property for tables have 3 values: collapse, separate, and inherit
* collapse collapses/condenses the borders to one border, separate stack them up against each other


### border-spacing

* when using `border-collapse: separate` (or wasn't defined) you can specify the space between borders
* use this instead of a margin to avoid more space between cells than on the sides
* accepts a length value and separates borders by that length
* when two lengths are specified the first is horizontal, second is vertical spacing

### adding borders to rows

* make sure border-collapse is collapse
* add border bottom to th and tr
* set no border to `th:last-child`

### striping tables

* use `tr:nth-child(even)` to set color
* make sure `border-collapse: separate;` and `border-spacing: 0;` is set on the table to avoid issue because td includes a border by default but th doesn't
* only set right and bottom borders since border-collapse is separate
* `td:first-child` gets a left border

### aligning text in table cells

* moving text around horizontally - `text-align` property as seen in typography
* moving text around vertically - `vertical-align` property
* `vertical-align` only works on display inline and table-cell elements
* most used `vertical-align` values are `top`, `middle`, and `bottom`
* `vertical-align` positions text in relation to the table cell, for table-cell elements
* or to the closest parent element, for inline-level elements

## 12. Best Practices

### HTML best practices

* Write Standards-Compliant Markup
* Make Use of Semantic Elements
* Use the Proper Document Structure - html, head, body
* Keep the Syntax Organized
    * Use lowercase letters within element names, attributes, and values
    * Indent nested elements
    * Strictly use double quotes, not single or completely omitted quotes
    * Remove the forward slash at the end of self-closing elements
    * Omit the values on Boolean attributes
* Use Practical ID & Class Values (with no reference to styling)
* Use the Alternative Text Attribute on Images (unless they're of no relevalnce to the content, then use background images)
* Separate Content from Style (no inline styles ever)
* Avoid a Case of “Divitis” (use HTML5 structural elements and keep the number of elements to the minimum anyways)
* Continually Refactor Code

### CSS best practices

* Organize Code with Comments (maybe even TOC at the top of the file)
* Write CSS Using Multiple Lines & Spaces (readibilty, version control)
* Use Proper Class Names (modular, semantic, all lowercase with hyphens)
* Build Proficient Selectors (low specificity, no ids)
* Use Specific Classes When Necessary (instead of lot of nested selectors)
* Use Shorthand Properties & Values (unless setting only one property)
* Use Shorthand Hexadecimal Color Values (and lowercase characters)
* Drop Units from Zero Values
* Group & Align Vendor Prefixes (and place an unprefixed version of our property and value last)
* Modularize Styles for Reuse

### additional resources

#### HTML & CSS

*   [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
*   [Opera.Dev](http://dev.opera.com/)
*   [HMTL5 doctor](http://html5doctor.com/)
*   [DevDocs - instant docs search](http://devdocs.io/)
*   [Pears - common patterns of markup and style](http://pea.rs/)
*   [HTML Dog](http://www.htmldog.com/)
*   [WTF HMTL CSS](http://wtfhtmlcss.com/)

#### design inspiration

*   [Dribbble](http://dribbble.com/)
*   [Pattern Tap](http://patterntap.com/)
*   [Premium Pixels](http://www.premiumpixels.com/)

#### frameworks & style guides

*   [Web Style Guide](http://webstyleguide.com/wsg3/index.html)
*   [Bootstrap](http://twitter.github.com/bootstrap/)
*   [Foundation](http://foundation.zurb.com/)
*   [Skeleton Framework](http://getskeleton.com/)
*   [Google HTML/CSS Style Guide](https://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml)
*   [GitHub Styleguide](https://github.com/styleguide/)
*   [Google Web Fundamentals](https://developers.google.com/web/fundamentals/)

#### icons

*   [Helveticons](http://hlvticons.ch/)
*   [Ion Icons](http://ionicons.com/)
*   [Social Network Icon Pack](http://www.komodomedia.com/blog/2009/06/social-network-icon-pack/)
*   [Fugue Icons](http://p.yusukekamiyamane.com/)
*   [famfamfam Icons](http://www.famfamfam.com/lab/icons/silk/)
*   [Pictos](http://pictos.cc/)
*   [Picons](http://picons.me/)
*   [The Noun Project](http://thenounproject.com/)

#### miscellaneous

*   [COLOURlovers - color trends palettes](http://www.colourlovers.com/)
*   [ColorHexa - color encyplopedia](http://www.colorhexa.com/)
*   [Modernizr](http://modernizr.com/)
*   [jQuery](http://jquery.com/)
*   [Google Hosted Libraries](https://developers.google.com/speed/libraries/devguide)
*   [Copy Paste Character](http://copypastecharacter.com/)
