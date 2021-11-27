# mysnippets

## jsx-a11y/alt-text
- img elements must have an alt prop, either with meaningful text, or an empty string for decorative images jsx-a11y/alt-text code example

```
<img src="foo" alt="Foo eating a sandwich." />
<img src="foo" alt={"Foo eating a sandwich."} />
<img src="foo" alt={altText} />
<img src="foo" alt={`${person} smiling`} />
<img src="foo" alt="" />

<object aria-label="foo" />
<object aria-labelledby="id1" />
<object>Meaningful description</object>
<object title="An object" />

<area aria-label="foo" />
<area aria-labelledby="id1" />
<area alt="This is descriptive!" />

<input type="image" alt="This is descriptive!" />
<input type="image" aria-label="foo" />
<input type="image" aria-labelledby="id1" />
```

------

## Using target="_blank" without rel="noopener noreferrer" is a security risk:

- When you link to a page on another site using the target="_blank" attribute, you can expose your site to performance and security issues:


https://mathiasbynens.github.io/rel-noopener/
https://web.dev/external-anchors-use-rel-noopener/

```
html: <a href="http://example.com" target="_blank">Link</a>
Fix:  <a href="http://example.com" target="_blank" rel="noopener noreferrer">Link</a>
```

----

## Deploy Nuxt with Vercel
- How to deploy a Nuxt app with Vercel?

```
{
  "builds": [
    {
      "src": "nuxt.config.js",
      "use": "@nuxtjs/vercel-builder",
      "config": {}
    }
  ]
}
```

https://nuxtjs.org/integrations/deployments/vercel#deploy-nuxt-with-vercel

-----

## React Hook useEffect has a missing dependency:'. Either include it or remove the dependency array.

https://javascript.plainenglish.io/react-hook-usecallback-82efba1ab4a9

https://newbedev.com/javascript-react-hook-useeffect-has-a-missing-dependency-loadinitialdata-either-include-it-or-remove-the-dependency-array-react-hooks-exhaustive-deps-code-example

https://newbedev.com/javascript-react-hook-useeffect-has-missing-dependencies-index-movie-and-props-either-include-them-or-remove-the-dependency-array-react-hooks-exhaustive-deps-code-example


```
import React, { useEffect, useState } from 'react';
import Todo from './Todo';
 
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setTodos(data);
      })
  });
  return (
    <div>
      {
        todos.map(todo => (
          <Todo
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))
      }
    </div>
  )
}
 
export default TodoList;
```

## React Hook React.useEffect has a missing dependency: 'init'. Either include it or remove the dependency array

```
const fetchBusinesses = useCallback(() => {
  ...
}, [])
useEffect(() => {
  fetchBusinesses()
}, [fetchBusinesses])
```

### If you want to run a function only once when the component loads and which takes in parameters then you can use useRef to avoid the warning. Something like this works:
```
const InitialPropA= useRef(propA);
  useEffect(() => {
    myFunction(InitialPropA.current);
  }, [myFunction, InitialPropA]);
```
#### So as in the code you want to change userStatus value when there's a change in userData and in this case if you want to check userStatus value you have add it to deps:
```
const [userStatus, setUserStatus]: any = React.useState([]);
  const [userData, setUserData]: any = React.useState([]);

  useEffect(() => {
    setUserStatus(!userStatus);
    return () => {};
  }, [userData, userStatus]);
```
#### You can use the callback-style of useState to avoid introducing userStatus variable in the dependencies array of useEffect.
```
useEffect(() => {
    setUserStatus(prevState => !prevState);
    return () => {};
  }, [userData]);
```

// eslint-disable-next-line react-hooks/exhaustive-deps
