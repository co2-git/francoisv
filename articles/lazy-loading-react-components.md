Lazy loading React components
===

In this article, we'll take a quick peek at lazy loading in React.

# Why use lazy loading

Lazy loading allows you to inject your components only when necessary, which you can not do using `require` or `import`. It uses the new `import()`, [a ESNext proposal](https://github.com/tc39/proposal-dynamic-import), which allows asynchronous injection.

It is very useful when used with assets bundler such as Webpack to do [code splitting](https://reactjs.org/docs/code-splitting.html) - separating your final bundle files into various chunk files, making it faster to download in HTTP/1.

# An overview of import()

```js
// Static hoisting import
import foo from 'foo';
foo();

// Dynamic import
import('foo').then(foo => foo());
```

# React loadable

[React loadable](https://npmjs.org/package/react-loadable) is a library that allows you to dynamically require your React components

```jsx
import React from 'react';
// Static import
import Foo from './Foo';

export default function Bar() {
  return <Foo />;
}

// Dynamic import
import Loadable from 'react-loadable';
const Foo = Loadable({
  loader: () => import('./foo'),
  loading: () => <div>Loading...</div>
});

export default function Bar() {
  return <Foo />;
}
```
