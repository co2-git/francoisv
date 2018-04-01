Lazy loading React components
===

In this article, we'll take a quick peek at lazy loading in React.

# Why use lazy loading

Lazy loading allows you to inject your components only when necessary, which you can not do using `require` or `import`. It uses the new `import()`, [a ESNext proposal](https://github.com/tc39/proposal-dynamic-import), which allows asynchronous injection.

It is very useful when used with assets bundler such as Webpack to do [code splitting](https://reactjs.org/docs/code-splitting.html) - separating your final bundle files into various chunk files, making it faster to download in HTTP/1.

# An overview of import()

https://gist.github.com/co2-git/f88060c799ac8d434c2ff0665e8b8b7e.js

# React loadable

[React loadable](https://npmjs.org/package/react-loadable) is a library that allows you to dynamically require your React components

https://gist.github.com/co2-git/96a59626bde9ab53f5ce04e25fca5c7f.js
