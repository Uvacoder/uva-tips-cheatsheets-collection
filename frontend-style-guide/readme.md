<img src="jungsoft_logo.png" width="300px"/>

# Frontend Style Guide

Welcome to Jungsoft's Frontend Style Guide. Sit down, have a cup of coffee and read this calmly. ☕

## Introduction

The goal of this guide is to help our team to understand and
follow code style best practices, maintaining a pattern.

As this guide is an extension of the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript),
we **highly recommend** reading it before you continue.

# :pushpin: Table of Contents

* [Components Definition](#components-definition)
* [Project Organization](#project-organization)
* [Code Standards](#code-standards)
* [Styles Patterns](#styles-patterns)

## Components Definition

All components should be defined within a directory. The main component file should be ``index.tsx``

```
LeadsList/
├── index.tsx
```

If it has some logic that would lead to a separation of concerns between presentational
and container components, the structure should be as following:
```
LeadsList/
├── index.tsx
├── LeadsListContent.tsx
```

## Project Organization

The source code of a project should be separated with at least these following essential directories:

```
awesome-project/
└── src/
   ├── components/ # Should store the components that are used in many views
   ├── views/ # Should store the application views
   └── contexts/ # Should store the context API's
   └── router/ # Should store the routes configurations
   └── utils/ # Should store the utility functions used to perform atomic logics
   └── translations/ # Should store the JSON files containing the text translations used in the project
   └── settings/ # Should store the configuration files of libs
      └── yup
         └── schemas # Should store the validation schemas of an entity
   └── constants/ # Should store the constants related to business rules, shared values, etc.
```

### `components/`

Most of the components will be function-based components. The choice between presentation and container implementations depends
of the scenario.

### `GraphQL Structure`

A directory called ``graphql`` should be created inside the component/view directory in order to store the query/mutation files.

```
awesome-project/
└── src/
   └── components/
       └── Leads
           └── graphql
              └── listLeadsQuery.ts
              └── updateLeadsMutation.ts
```

[Back to top ⬆️](#pushpin-table-of-contents)

# Code standards

### Use explanatory variables
❌ Bad
```js
const onlyNumbersRegex = /^\d+$/
const validateNumber = message => value => !onlyNumbersRegex.test(value) && message

validateNumber('error message')(1)
```

✅ Good
```js
const onlyNumbersRegex = /^\d+$/
const getNumberValidation = message => value => !onlyNumbersRegex.test(value) && message

const isNumber = getNumberValidation('error message')

isNumber(1)
```

<br />

### Use searchable and semantic names

❌ Bad
```js
setTimeout(doSomething, 86400000)
```

✅ Good
```js
const DAY_IN_MILLISECONDS = 86400000

setTimeout(doSomething, DAY_IN_MILLISECONDS)
```

<br />

### Just leave TODOs if it's related to a new issue

❌ Bad
```
  // TODO: Extract this to a component.
  {...}
```

✅ Good
```
  // TODO: Support recording voice messages in chat.
  {...}
```

<br />

### Leave comments for workarounds related to issues with a lib/language

❌ Bad
```
const handleFilePreview = useCallback((event) => {
 const file = Array.from(event.target.files)[0];

 // eslint-disable-next-line no-param-reassign
 event.target.value = "";
```

✅ Good
```
const handleFilePreview = useCallback((event) => {
 const file = Array.from(event.target.files)[0];

 // Refer to issue https://github.com/ngokevin/react-file-reader-input/issues/11#issuecomment-363484861
 // eslint-disable-next-line no-param-reassign
 event.target.value = "";
```

<br />

### Apply JSDocs to utility functions or constants to improve readability

It can be applied to components, handlers or utility functions.

❌ Bad
```
const truncateEventName = (
  eventName,
  maxLength = SHORT_EVENT_NAME_LENGTH,
) => (
```

✅ Good
```
/**
 * Truncates one event name to the max length.
 * @param {*} eventName The event name
 * @param {*} maxLength Max text length
 */
const truncateEventName = (
  eventName,
  maxLength = SHORT_EVENT_NAME_LENGTH,
) => (
```

<br />

❌ Bad
```
const chatEventsStatuses = {
  CURRENT_USER_LEFT,
  CURRENT_USER_WAS_REMOVED,
  CURRENT_USER_REMOVED_MEMBER,
  CURRENT_USER_WAS_ADDED,
```

✅ Good
```
/**
 * The chat event statuses according to the
 * current user and the chat event member
 */
const chatEventsStatuses = {
  CURRENT_USER_LEFT,
  CURRENT_USER_WAS_REMOVED,
  CURRENT_USER_REMOVED_MEMBER,
  CURRENT_USER_WAS_ADDED,
```

<br />

### Use curried functions to avoid re-creating inline functions on every render of the component

❌ Bad
```
const handleClick = (item) => {
 {...}
};

<Button onClick={() => handleClick(item)}>
```

✅ Good
```
const handleClick = (item) => () => {
 {...}
};

<Button onClick={handleClick(item)}>
```

<br />

### Break lines for multiple hook dependencies

❌ Bad
```
useEffect(() => {
    if (file) {
      processFile(file)
        .then(({ result }) => {
          setFileSource(result);
        })
        .catch(() => {
          notify.danger(t("errors.an_error_occurred"));
        });
    }
  }, [setFileSource, file, fileSource, isVideo, notify, t]);
```

✅ Good
```
useEffect(() => {
    if (file) {
      processFile(file)
        .then(({ result }) => {
          setFileSource(result);
        })
        .catch(() => {
          notify.danger(t("errors.an_error_occurred"));
        });
    }
  }, [
    setFileSource,
    file,
    fileSource,
    isVideo,
    notify,
    t,
  ]);
```

<br />

### Break lines for multiple conditions and extract to semantic variables

❌ Bad
```
if ((!selectedProduct && !selectedLeasingOffer) || !individualOffer) {
   return;
}

```

✅ Good
```
const hasSelectedOffer = !!(
   selectedProduct
   || selectedLeasingOffer
);

if (!hasSelectedOffer && !individualOffer) {
   return;
}
```

<br />

### Break lines between queries and mutations hooks

❌ Bad
```
  const [currentUser] = useCurrentUser();
  const notify = useSnackbar();
  const [t] = useTranslation();
  const [sendRiskAssessment] = useMutation(SEND_RISK_ASSESSMENT_MUTATION);
  const {
    loading: healthCentersLoading,
    error: healthCentersError,
    data: healthCentersData,
    refetch: healthCentersRefetch,
  } = useSafeQuery(GET_LIST_HEALTH_CENTER_QUERY);
```

✅ Good
```
  const [currentUser] = useCurrentUser();
  const [t] = useTranslation();
  const notify = useSnackbar();

  const [sendRiskAssessment] = useMutation(SEND_RISK_ASSESSMENT_MUTATION);

  const {
    loading: healthCentersLoading,
    error: healthCentersError,
    data: healthCentersData,
    refetch: healthCentersRefetch,
  } = useSafeQuery(GET_LIST_HEALTH_CENTER_QUERY);
 ```

<br />

### Prefer to use optional chaining to access object properties instead of destructuring

❌ Bad
```
  const {
    values: {
      answers,
    },
  } = formikForm;
```

✅ Good
```
  const answers = formikForm?.values?.answers;
```

<br />

### JSX Indentation - Curly Braces

❌ Bad
```
{!isEnd && (
   <Button
     className={scheduleADemoButtonClasses}
     onClick={handleNavigateToEnd}
   >
     <h4>
       Schedule a Demo
     </h4>
   </Button>
)}
```

✅ Good
```
{
   !isEnd && (
      <Button
        className={scheduleADemoButtonClasses}
        onClick={handleNavigateToEnd}
      >
        <h4>
          Schedule a Demo
        </h4>
      </Button>
   )
}
```

### Early returns

The function should trigger the termination as soon as possible in case of divergence with its purpose.

❌ Bad
```
function someFunction(someCondition) {
    if (someCondition) {
        // Do something
    }
}
```

✅ Good
```
function someFunction(someCondition) {
    if (!someCondition) {
        return
    }

    // Do something
}
```

[Back to top ⬆️](#pushpin-table-of-contents)

## Styles Patterns

### Variables

It's important to use variables in order to increase the reusability of styles and also to be consistent.

For instance:

```
// COLORS
$white: #fff;
$gray: #868686;
$light-gray: #E5E9ED;
$medium-gray: #D9D9D9;
$dark-gray: #5D576B;
$facebook-blue: #3B5998;

// BREAKPOINTS
$screen-xs: 400px;
$screen-sm: 575px;
$screen-md: 767px;
$screen-lg: 991px;
$screen-xl: 1199px;
```

```
$aspect-ratio: 1.78;

.media-container {
 right: calc(#{$video-width} * #{$video-position-ratio});
 width: $video-width;
 height: calc(#{$video-width} / #{$aspect-ratio});
}
```

<br />

### Don't use values that are not specified in the project design system

When applying margin, padding (spaces in general) or lengths, try as much as possible to use the classes from the design system. If there's no class that applies to the case, then extract it to a variable in order to be more verbose.

❌ Bad
```
.media-container {
  margin-bottom: 25px;
}
```

✅ Good
```
<div className="mb-2 media-container">{...}</div>
```

❌ Bad
```
.media-container {
   width: 250px;
}
```

<br />

✅ Good
```
// COMPONENTS LENGTHS
$media-container-width: 250px;

.media-container {
   width: $media-container-width;
}
```

[Back to top ⬆️](#pushpin-table-of-contents)
