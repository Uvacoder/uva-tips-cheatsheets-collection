# GitPitch Cheat Sheet

GitPitch - A slide system built using Markdown and Reveal.js

This cheat sheet is designed to reduce the docs for GitPitch down dramatically to have a good reference source.

---

## Basics

Make everything in a `PITCHME.md` file. Use standard Markdown for all formatting.

### URLs

Github:
`https://gitpitch.com/$user/$repo/$branch`

Gitlab:
`https://gitpitch.com/$user/$repo/$branch?grs=gitlab`

Bitbucket:
`https://gitpitch.com/$user/$repo/$branch?grs=bitbucket`

Start from a certain directory:
`?p=$directory`

### Template Repo

You can pull down [https://github.com/gitpitch/the-template](https://github.com/gitpitch/the-template) and merge those files into your repo for some templates, as well as to have some example slides to look off of.

### Slides

`---` marks a new slide horizontally (right)
`+++` marks a new slide vertically (down)

### Controls

| Keystrokes  | Action  |
|---|---|
| `N` , `Space`, `PageDown` | Next slide |
| `P`, `PageUp` | Previous slide |
| `←` , `H` | Navigate left * |
| `→` , `L` | Navigate right * |
| `↑` , `K` | Navigate up * |
| `↓` , `J` | Navigate down * |
| `Shift + *` | Skip over slide fragments |
| `Home` | First slide |
| `End` | Last slide |
| `B` , `.` | Blackout |
| `F` | Fullscreen |
| `Esc`, `O` | Slide overview |
| `X` | Select Code Block |
| `S` | Speaker notes view |
| `?` | Keyboard shortcuts help screen |

With `mousewheel : true` in the settings you can use the mouse wheel to control slides. (Disabled by default)

With `remote-control : true` in the settings you can use a remote control device with the slides. (Disabled by default)

---

## PITCHME Settings

Use a `PITCHME.yaml` file to store some presentation settings that are loaded with the slide show.

If the file is _not_ there, the presentation halts and you have to add the file.

See the Slideshow Settings section to see all the settings.

---

## Template Anatomy

```
.
├── PITCHME.md
├── PITCHME.yaml
└── template
    ├── css
    │   └── PITCHME.css
    ├── img
    │   ├── batman.png
    │   ├── dataflow.png
    │   ├── developer.jpg
    │   ├── einstein.png
    │   └── ....
    └── md
        ├── about/PITCHME.md
        ├── announcement/PITCHME.md
        ├── code-presenting/PITCHME.md
        ├── header-footer/PITCHME.md
        ├── image/PITCHME.md
        ├── list-content/PITCHME.md
        ├── quotation/PITCHME.md
        ├── sidebar/PITCHME.md
        ├── sidebox/PITCHME.md
        ├── split-screen/PITCHME.md
        └── wrap-up/PITCHME.md
```

Related slides are grouped and maintained within distinct, design-specific `PITCHME.md` markdown files. This provides a modular support.

Custom styling is in `template/css/PITCHME.css`

---

## Markdown Shortcuts

### Fonts

These can be used on a line alone or in the middle of text.

**Custom font size:**
```
@size[size-value](text)
```
`size-value` can be any valid CSS size (px, em, etc.)

**Custom font color:**

```
@color[color-value](text)
```
`color-value` can be any valid CSS color (white, #ffffff, #fff, etc.)

**Custom CSS class:**
```
@css[class-name](text)
```
`class-name` can be any custom theme class without the period. (so `headline` not `.headline`)

**Custom slide transition**

```
@transition[transition-type]
```
`transition-type` is any supported type (none, slide, fade, convex, concave, zoom) or pair. If paired, use `-in` or `-out` added to the in (like `zoom-in fade-out`)

You cannot use custom transitions with snap layouts.

### Font Awesome

```
@fa[font-awesome-class...]
```
Adds a Font Awesome icon in place in text. You can include colors and other classes here too.

### Rendered emoji (Pro)

```
@emoji[emoji-name]
```

Adds an emoji in place in text.

---

## Markdown Widgets

### Box types

```
@box[type...](text)
```
`type...` is one or more CSS types. These include:
* `rounded` and `waved` or the default (don't specify for a square box)
* some colors with `bg-` and the color (like `bg-white`, `bg-green`, etc.)
* some text colors with `text-` and the color (like `text-white`, `text-green`, etc.)
* custom CSS types

### Rendered quotes
```
@quote[text]
```

Puts text in a rendered box using CSS formatting.

```
@quote[text](attribution-author)
```
Puts text in a rendered formatted box with the attribution or author after it.

### Rendered styled images
```
![PIC](url-src)
```

Inserts an image using the rendered default for the slide.

```
@img[class...](url-src)
```
Inserts an image using any rendered CSS classes associated with images. Specify them with `.reveal img` or optionally add in any sub-class, then add the subclass to the widget.

* Use a `clip-img` class to round an image.
* Use a `bg-` + color class to add a background to transparent images.

---

## Fragments

Use fragments to separate content that can be advanced through one by one.

### Text Fragments
```
@css[class...](text)
```

To turn text into a fragment.

### Box-text fragments
```
@box[class...](text)
```

Turns text into a box fragment.

### Image fragments
```
@img[fragment](url-src)
```
Turns an image into a fragment.

### Font Awesome Icon Fragment
```
@fa[class...]
```
Turns an Font Awesome Icon into a fragment.

### Snap Layout Fragments
```
@snap[class...]
text
@snapend
```

Turns any snap region into a fragment.

### Table row fragments

```
<table>
   ...
   <tr class="fragment">
      ...
   </tr>
   ...
</table>
```

Turns table rows into individual fragments.

### HTML fragments

```
<tag class="fragment">...</tag>
```

Turns any HTML snippet into a fragment. This works on any element that can take a CSS class attribute.

---

## Lists

### Unordered List with Fragment Items

```
@ul

- Item
- Item
...

@ulend
```

### Unordered Lists with Custom CSS class with Fragment ITems

```
@ul[class]

- Item
- Item
...

@ulend
```
where `class` is a custom CSS attribute you've defined in the template CSS file.

### Unordered Lists with Fragment-Specific Speaker Notes

```
@ul

- Item @note[speaker note text]
- Item @note[speaker note text]
...

@ulend
```

### Ordered List with Fragment Items

```
@ol

- Item
- Item
...

@olend
```

### Ordered Lists with Custom CSS class with Fragment ITems

```
@ol[class]

- Item
- Item
...

@olend
```
where `class` is a custom CSS attribute you've defined in the template CSS file.

### Ordered Lists with Fragment-Specific Speaker Notes

```
@ol

- Item @note[speaker note text]
- Item @note[speaker note text]
...

@olend
```

### Lists with Fragments Disabled

```
@ol[](false)
...
@olend
```
```
@ol[class...](false)
...
@olend
```
```
@ul[](false)
...
@ulend
```
```
@ul[class...](false)
...
@ulend
```

---

## Code Presenting

### Gists

```
---?gist=onetapbeyond/494e0fecaf0d6a2aa2acadfb8eb9d6e8
```
to load the Gist and format it with a language, then give it a title on the slide.

Optional parameters include:
- `&lang=js` for language syntax formatting
- `&color=#123456` for a background color
- `&title=text` for a slide title header

### Gist code fragments
```
@[fragment-range]
```
```
@[fragment-range](annotation)
```
to highlight the lines in `fragment-range` and put the optional `annotation` at the bottom of the slide.

### Fenced Code Blocks
````
``` 
code goes here
```
````
This automatically adds syntax highlighting.

````
```language
code goes here
```
````
To add language-specific highlighting. Examples include:
- `bash`, `sh`, `zsh`, etc.
- `c`, `cpp`, `cs`, `csharp`, `c++`, etc.
- `html`
- `haskell`, `hs`
- `javascript`, `js`, `jsx`
- `php`, `php3`, `php4`, `php5`, etc.
- `powershell`, `ps`

and so on. See https://highlightjs.readthedocs.io/en/latest/css-classes-reference.html?highlight=language%20class#language-names-and-aliases for a full list of all languages used by Highlight.js

Set a default code language with the `highlight : lang` setting in `PITCHME.yaml`. 

### Repo Source Files
```
---?code=src/server.go
```

Renders the `src/server.go` file on a slide. Optional parameters include:
- `&lang=js` for language syntax formatting
- `&color=#123456` for a background color
- `&title=text` for a slide title header

### Markdown Files

Use the same format as Repo Source Files above. (`?code=src/file.md`)

---

## Images

### Simple image
```
![alt-title](url-src)
```
inserts a basic image. Local files must be relative to root of the Git repo (ex: `assets/img/logo.png`) or remote files should be prefixed with http:// or https://.

### Background Image
```
---?image=url-src
```
where `url-src` is a local file relative to root of the Git repo (ex: `assets/img/logo.png`) or remote files should be prefixed with http:// or https://.

Optional parameters include:
- `&size=50% 100%` to scale the image. Use any valid CSS background-size values (width, width height, auto, auto auto, or other)
- `&size=auto 90%` to scale a tall image to fit on the slide properly (you can adjust the 90% as desired)
- `&size=contain` to resize the image so that it's fully visible within the slide
- `&size=cover` to resize the image so it completely fills the background, stretching it if need be
- `&color=#123456` to change the background color. Use any valid CSS color value
- `&position=center` to adjust the background position of the image. You can use any `background-position` CSS property, including center, left, right, px values, percentage values, and more. Default is center.
- `&repeat=repeat-x` to repeat the image in a tiled pattern. Any `background-repeat` CSS property can work including no-repeat, repeat, repeat-x, repeat-y, space, round, and more. It can be either one syntax or `horizontal vertical` syntax.
- `&transition=fade` to add a transition between slides.

### Background Opacity (Pro)

Add the following parameter to a background image:
```
&opacity=num
``` 
where `num` is a percentage of the capacity (where 0% is perfect transparent and 100% is perfectly opaque).

### Image animations

Make a set of image slides that have minor changes, then name them traisition between each other:
```
---?image=assets/img/grav-open-course-workflow-1.png&size=contain&transition=none

---?image=assets/img/grav-open-course-workflow-2.png&size=contain&transition=none

---?image=assets/img/grav-open-course-workflow-3.png&size=contain&transition=none

---?image=assets/img/grav-open-course-workflow-4.png&size=contain&transition=none
```

### Size limitations

Images over 1 megabyte will not load automatically. This is to help prevent excessive loading time. Use some image editing tools to shrink that down.

---

## Rich Media

### Linear gradients

Add the gradient to a background color slide:
```
---?color=linear-gradient(to left, #123456, #654321)
```
Use https://uigradients.com/ to make some gradients and get CSS codes to use.

### Math formulas

You can use MathJax scripting to display math formulas. 

Example:
```
`\[
\left( \sum_{k=1}^n a_k b_k \right)^{\!\!2} \leq
 \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
\]`
```
See https://www.mathjax.org/ to learn about syntax.

It is disabled by default, you'll need to enable it in settings:
```
mathjax : TeX-MML-AM_HTMLorMML-full
```

### Charts

Charts are rendered with Chart.js. Enclose it in `<chart>` tags:

```
<canvas data-chart="line">
<!-- 
{
 "data": {
  "labels": ["January"," February"," March"," April"," May"," June"," July"],
  "datasets": [
   {
    "data":[65,59,80,81,56,55,40],
    "label":"My first dataset","backgroundColor":"rgba(20,220,220,.8)"
   },
   {
    "data":[28,48,40,19,86,27,90],
    "label":"My second dataset","backgroundColor":"rgba(220,120,120,.8)"
   }
  ]
 }, 
 "options": { "responsive": "true" }
}
-->
</canvas>
```

It is disabled by default, it needs to be enabled in the settings:
```
charts : true
```

See https://github.com/rajgoel/reveal.js-plugins/tree/master/chart for more information.

### Font Awesome
```
@fa[icon-name]
```
to add an icon. leave off the `fa-` at the beginning of the icon name.

```
@fa[icon-name](title)
```
to add a title attribute to the icon too.

```
@fa[icon-name size]
```
to add the icon with a certain size. Options include fa-lg, fa-2x, fa-3x, fa-4x, fa-5x.

```
@fa[icon-name fa-spin]
```
to spin the icon.

You can add additional CSS classes after the icon-name, size, or spin.

See https://fontawesome.com/v4.7.0/icons for the full list of icons.

### In-slide Videos

Videos need to be streamed, not added to the repo. 

```
![title](https://player.vimeo.com/video/123456789)
```
will add a Vimeo video.

```
![title](https://www.youtube.com/embed/abcdefghijk)
```
will add a YouTube video.

```
![title](http://url-to-video.com/video.mp4)
```
to add a MP4 or WebM video to the page.

(Pro) With a pro account, you can stream repo videos locally with GitPitch Desktop.

### Background Videos

```
---?video=url-src
```
will add a video in the background (or "theater mode"). Videos can only be streamed from a MP4 or WebM video file, or a Youtube, Vimeo, or other site.

---

## Layout Features

### Note

If you use snap layouts AND slide transitions, you may end up with cases where the slide transitions, then stuff pops into place instantly. This is due to how the snap rendering system works separately from the slide rendering system. See https://gitpitch.com/docs/layout-features/snap-layout-slide-transitions/#snap-layouts-rendering-and-slide-transitions for more information and possible ways to fix it.

### Snap Layout Basic Syntax

```
@snap[direction]
text
@snapend
```
creates a snap fragment for text. `direction` can be any cardinal direction (north, north-west, west, south-west, etc.) or midpoint. 

### Span Sizes

```
@snap[west span-40]
text
@snapend
```
where `span-40` is a CSS class that specifies 40% of the screen should be used by that snap widget in the `west` area. Any multiple of 10 between 0 and 100 can be used as a span size.

### Sidebar

```
@snap[west sidebar]
text
@snapend
```
sets the text to be positioned in a sidebar in the `west` section. Use a `.sidebar` CSS element to define any traits (like width) to be used.

### Snap Layout Examples

See https://gitpitch.com/docs/layout-features/examples-snap-inspirations/ for some examples of cool slides you can make in Markdown.

### Disable All Transitions

Put this in your `PITCHME.yaml` file:
```
transition : none
```

### Disable Transition on Individual Slides

```
---
@transition[none]
```

---

## Auxillary Features

### Google Analytics

Add this to your `PITCHME.yaml` file:

```
gatoken : UA-1111111-1
```
You must also create a GA Property for gitpitch.com as well. See https://gitpitch.com/docs/settings/google-analytics for directions.

### Auto-Generated Table of Contents

![Screenshot](https://gitpitch.com/docs/images/auxiliary-feature-toc.jpg)

The table of contents is automatically generated from your content. You can customize the names of slides by adding to each slide:

```
---
@title[Slide title]
```

If you don't specify a slide, and GitPitch can't figure one out, then the slide number is used in the TOC.

### Embedding GitPitch slides into other sites

You can use Embed.ly to embed them into sites. See https://embed.ly/provider/gitpitch for more information.

Many other sites like Wordpress, Medium, Tumblr, and Blogger support them too.

---

## Speaker Features

### Speaker Notes

Speaker notes are private notes that you see and are not presented on the slide.

Notes are added after a `Note:` section, and can be text or markdown:

```
---
# Header

Notes:
Anything here is not shown on the slide.
```

### Speaker Notes Preview

Add `?n=true` to the URL to enable a speaker notes preview, which shows notes by the slide.

### Speaker Notes Window

Press S while in the slide show to open the speaker notes window.

### Remote Control Setting

Add this to your `PITCHME.yaml` file to enable a remote control:
```
remote-control : true
```

### Presenting Offline without the Network

Everyone: There is an option to download an offline, self-contained form of slides. 

GitPitch Pro: You can install GitPitch Desktop for offline presentations. This also supports remote controls and multiple computers (like tablet with speaker notes and laptop with slides).

### Presenting on a Conference Laptop

GitPitch uses a lazy-loading strategy. This makes sense sharing online since it doesn't load everything all at once. For instances like this, it may not make sense. You can turn on eager-loading (or turn off lazy-loading) with this:

```
eager-loading : true
```

This is also recommended for any live presentation.

---

## Slide Themes

### Fixed Themes

GitPitch ships with several out-of-the-box themes. These are inherited from Reveal.js. You can go into the left menu, choose one, and your slideshow will instantly have that.

Themes include:
- White (default)
- Black
- Sky
- Beige
- Moon
- Night
- Simple

You can specify a theme in your `PITCHME.yaml` file too:
```
theme : beige
```

### Customize Reveal.js Themes

You can see the CSS style rules involved in this here: https://github.com/hakimel/reveal.js/tree/master/css/theme

You can use a web inspector in your browser to see the style settings as well.

To override (the theme with your own CSS file, set this setting in your `PITCHME.yaml` file:
```
theme-override : assets/css/PITCHME.css
```
(where `assets/css/PITCHME.css` is a CSS file relative to the repo root directory)

### Span-Width Styles

You can use `.span-`width styles to constrain the horizontal space used by slide content. The vertical content is adjusted automatically.

`.span-` classes go from `.span-5` to `.span-100` in 5-percent increments.

### Text Color Styles

Several built-in color styles are available:
- `.text-black`
- `.text-blue`
- `.text-gray`
- `.text-green`
- `.text-orange`
- `.text-gold`
- `.text-pink`
- `.text-purple`
- `.text-yellow`
- `.text-white`

There are also heading color styles (starts with `.h1-` through `.h4-` etc.) with the same colors as above.

### Background Color Styles

Several built-in color styles are available:
- `.bg-black`
- `.bg-blue`
- `.bg-gray`
- `.bg-green`
- `.bg-orange`
- `.bg-gold`
- `.bg-pink`
- `.bg-purple`
- `.bg-yellow`
- `.bg-white`


### Text Font Sizes

You can use `.text-`size styles to specify font sizes in .1 em sizes. 

`.text-` classes go from `.text-01` (for 0.1em) to `.text-50` (for 5.0em) in 1 digit (or 0.1em) increments.

### Font Weight Styles

The following styles are available:

- `.text-bold`
- `.text-italic` or `.text-italics`
- `.text-uppercase`
- `.text-lowercase`
- `.text-capitalize`
- `.text-smallcaps`

### Text Alignment Styles

The following alignment styles are available:

- `.text-center`
- `.text-left`
- `.text-right`

### Overriding Utility Styles

Any of the above utility styles can be overwritten by custom CSS.

See https://gitpitch.com/docs/themes/css-utility-styles/ for definitions of how the above utility classes are defined.

### (Pro) Fonts

There are fonts attached to the default fixed theme. Font for the pro subscriptions allow you to have more choices based on some Google Web Fonts.

Use the CSS from https://gitpitch.com/docs/themes/pro-fonts/ to enable these.


---

## Slideshow Settings

All settings are stored in `PITCHME.yaml`.

### Theme
```
theme : beige
```
Theme choices:
- white (default)
- black
- sky
- beige
- moon
- night
- simple

### Theme override
```
theme-override : css-src-file
```
File is relative to repo directory root.

### Code Highlight Setting
```
highlight : language
```
(where `language` is a language supported by the [highlight.js](https://highlightjs.org/) library, and written in lowercase.)

You can also add highlighting styles to the language by adding a style after it like so:
```
highlight : language-theme
```
(for example, `mono-blue`)

See a demo of themes and languages here: https://highlightjs.org/static/demo/

### Code Line Numbers Setting
```
code-line-numbers : true
```
(where it's `true` or `false` if you want line numbers on your code files)

### Layout Setting
```
layout : top-left
```
Possible choices:
- center (default)
- center-left
- center-right
- top
- top-left
- top-right

### Logo Image
```
logo : img-src-file
```
Img file is relative to repo root directory.

```
logo-position : position
```
Possible choices:
- top-left (default)
- top-right
- bottom-left
- bottom-right

If logo-position is bottom-right, then controls layout setting is automatically set to using edges layout.

### Background Settings
```
background : src-img-file
```
where source file is relative to repo directory.

```
background-size : classes
```
where `classes` are one or more classes that are valid background-size CSS properties.

```
background-position : pos
```
where position is any valid background-position CSS property.

```
background-color : class
```
where class is a valid background-color CSS property.

```
background-repeat : repeat-setting
```
where repeat-setting is a valid background-repeat CSS property.

```
background-opacity : num
```
where num is a number from 10 to 100, numbered in 5s, referring to a percentage of transparency.

### Transition Setting
```
transition : fade
```
Possible choices:
- none (default)
- slide
- fade
- convex
- concave
- zoom

### Title Setting
```
title : title-text
```
where `title-text` is the title used in search results, browser tabs, etc.

### Footnote
```
footnote : footnote-text
```
where `footnote-text` is text shown in normal and fullscreen mode. It can be any HTML snippet.

HTML in the footnote will need to be styled if you wish to change it.

### Published Setting
```
published : true
```
where this setting lets you set whether it's post-development and ready to be shared.

![](https://gitpitch.com/docs/images/settings-published-menu.jpg)

### Loop Setting
```
loop : true
```
where the setting is whether the last slide will link back to the first slide, false by default.

### RTL Setting
```
rtl : true
```
activates right-to-left navigation between slides. It is false by default (so left-to-right).

### Controls Layout Setting
```
controls-layout : layout
```
Possible vhoices:
- `bottom-right` (default)
- `edges`

### Print Fragments Setting
```
print-fragments : true
```
where true means all fragments will print into a PDF as their own page.

### Mousewheel Setting
```
mousewheel : true
```
where this activates using the mouse wheel to scroll through slides, and is disabled by default.

### Remote Control Setting
```
remote-control : true
```
where this activates using controllers to scroll through slides, and is disabled by default.

Use 
`remote-control-prevkey` and `remote-control-nextkey` to customize which buttons control the buttons. (Use number keycodes.)

### Eager Loading Setting
```
eager-loading : true
```
sets whether it will load all of the images when the show loads (true) or as you slowly get to the particular slide (false, lazy loading).

### Charts Plugin Setting
```
charts : true
```
will enable the charts plugin.

### MathJax Plugin Setting
```
mathjax : setting
```
which will enable the MathJax plugin with a certain configuration, where possible settings are listed here: http://docs.mathjax.org/en/latest/config-files.html

### Google Analytics Setting
```
gatoken : UA-11111111-1
```
where the token is a tracking code associated with a GA Property.

### Twitter Card Settings
```
title : "title-text"
description : 'desc-text"
thumbnail : src-image-url
```
will set the Twitter Card or other Open Graph card details so they can be shared on social media.

---

# Corrections/Updates

I will gladly accept PRs for updates on this or messages regarding corrections. Please submit a PR, contact me @geekygirlsarah on Twitter, or contact me through my website at sarahwithee.com. Thanks!