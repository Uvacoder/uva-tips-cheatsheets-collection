# Frontend Style Guide (Draft)
This guide is here to set common and recommended baselines to code conventions and best practices that will save time, help maintain focus and increase dev efficiency overall.

## Architecture
* (Add diagram of our desired architecutre here)
* `services` `store` `logic handling component` `plane views` `global state` `local state`

## Principals
* Separation of Concerns - aspire to keep it at all times. Logic should be in `<script>...` section and not in the `<template>...` same goes for `scss`
* 

## Project Sturcture
* divison of `src` to `frontend` and `backend`?
* Where we put `components` at what structure, what hirearchy.
* Where do we put `shared styles`
* Where do we put `shared logic` like `util` or `services` or `vue components` that are shared like a Shared UI folder(based on a design system)
* When to divide to `.scss` file (After certain amount of lines of code) 

## Naming
* File names should be in `kebab-case.vue` format - for `vue files` and `scss files`

## Vue.js

### Data Binding and Custom Events
* `custom events` should be written in `camelCase` format both when declared(emitted) and when listend to in the template.
* When in need of a passing a reacctive property to a `custom component` prefer using `v-model="myReactivePropFromParent"` like so:
```
<MyCustomComponent v-model="myReactivePropFromParent" />
```

And then use the default `input` event to emit the change to the `myReactivePropFromParent` from the child component like so:
```
props: {
  value: {
    type: String
  }
},
methods: {
  someMethodThatIsInvokedOnSomeTriggerOfChild() {
    this.$emit('input', this.value);
  }
}
```
And that is it, the parent component's property `myReactivePropFromParent` is now reactive and will respond to changed in `someMethodThatIsInvokedOnSomeTriggerOfChild`.
* In Summary: The above is a faster and less biolerplate way to achieve `v-bind` and `v-on` with all the redundant setters - useful syntax sugar.
* In the majority of the cases this approach would serve us. But in rarer more complex occasions consider using an other vue [model](https://vuejs.org/v2/api/#model) that gives more customization for custom prop names, custom event names.

### Init Data
* Initting variables in the `data` method in a vue component should be done with the `null` value. (**NOT** using `undefined` as it collides with JS defauls occasionally)
### Separate Logic and Views
* When writing components keep in mind the difference between `smart` and `dumb` components or `logic-handling` and `plane views`(non logic-handling) components.

## Template (HTML)
* When your html tag has `3 attributes` that is the time to open new lines and stack them vertically instead of horizontally.

## Styling (CSS / SCSS / Both)

## CSS
* Using `CSS Variables`:
- If a certain value of a size/color/other repeats itself. 
- Consider writing color pallettes, groups of sizes in a certain location at the top part of your file
- Consider dividing your `shared` `styles` to `layout` `mixins` `common` `utility` and any other shared logic category that makes sense to you.
* Use `CSS Utility Classes`- such as `clickable` that will provide `cursor: pointer` and maybe also `user-select:none`. Mapping out your prevalnt utility classes can save a whole lot of time on development and keeps your code DRY(dont repeat yourself), prefer using them when you can.
* When writing `CSS Classes` write just the specific class you want to modify without the previous hirearchy of classes. It is an appraoch that helps keep flexibility and speed. If you reach a point that you begin to experience or expect to experience class collissions within a component - well, that is a good time to breakdown your component to sub-components :) and keep your code more modular. Like so:
```
.some-parent-class {...}

.some-child-class {...}

.some-grand-child-class {...}
```

## SCSS
* Work with `scss` preprocessor, the main reason is to use `nested classes`, by getting use to writing nested classes in every component the HTML DOM tree is inflicted in the scss you are writing.(That helps in orientation and in - getting to where you need to add / change more code blazing fast. `scss variables` help with things `css variables` do not yet support like using variables in `media queries`)
* Write `SCSS Variables` for any piece of shared `colors` `layouts` `sizes  and `mixins` at the global scope, or for shared
usage within a component and its descendents write the variables in that parent component.
* `<style>...` tags inside `.vue` components should be created in default with `scoped` and `lang="scss"` attributes.
* 
