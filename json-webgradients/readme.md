# Guide for adding gradient in gradients.json file

### Color groups

```
['#259BE5', '#E5E9EC', '#7BCC9B', '#F9AFAD', '#FC96D3', '#8B56E9']
```
### JSON structure
```
"name": "Winter Neva",  // gradient name
"favorite": false,  // default value
"index": 1,  // gradient index in array ( check last index in json file )
"deg": 120,  // gradient degree ( top - zero degree )
"group": [ "#259BE5" ],  // check color groups, may contains more than one value
"gradient": [  // color array, may contains more than one object
    {
        "color": "#a1c4fd",  // HEX
        "pos": 0 // color position in gradient
    },
    {
        "color": "#c2e9fb",
        "pos": 100
    }
]
```
-----
# WebGradients
A curated collection of splendid gradients made in `CSS3`, `.sketch` and `.PSD` formats. 
[View all the gradients here »](https://webgradients.com)

[![N|Solid](https://beta.airtap.co/img/components/footer/logo-itmeo.svg)](https://itmeo.com)



## How To Use
1. Download the file [`webgradients.css`](https://github.com/itmeo/webgradients/blob/master/webgradients.css).
2. Place the file in your project folder.
3. Link the file it in the `<head>` of your document.

```
<html>
  <head>
    <link href="webgradients.css" rel="stylesheet">
  </head>
  ...
```

