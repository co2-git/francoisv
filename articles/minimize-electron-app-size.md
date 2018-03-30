Minimize Electron app size
===

[Electron](https://electronjs.org/) allows you to build cross-platform desktop apps that run on Windows, Mac and Linux. It is very popular because it uses web technologies such as HTML, CSS and JavaScript to do so. If you can build a website, you can build a desktop app.

One of the downsides of Electron is the size of the app. In order to be interoperable, it sits on top of Chrome and NodeJS, which can run on any OS. This means that any Electron app ships with Chrome and NodeJS, resulting in a consequent build size. The Hello World app itself is 100MB and you won't be able to minimize it way more. The goal of your Electron app is not to exceed that ~100MB limit. Here are some tricks to achieve that purpose.

For this article, we'll use the [Electron Packager](https://github.com/electron-userland/electron-packager) module to build our Electron app

# Use ignore

There are probably a lot of folders you can ignore in your build. To do so, you can use the `--ignore` option to specify which files to exclude from your build.

```
electron-packager --ignore=folder1 --ignore=folder2
```

Note that you can use regular expressions. Note also that **[globing](https://en.wikipedia.org/wiki/Glob_%28programming%29)** is not supported.

# Use Webpack (or another assets bundler)

[Webpack](http://webpack.github.io/) is an assets bundler, like [Rollup](https://rollupjs.org/guide/en) or [Browserify](http://browserify.org/). It will merge all your files into one big file. It does so in a smart way using a method called *tree shaking* which only includes the parts of the code you need.

```
import {foo} from 'bar';
```

In the example above, only the `foo` method will be included instead of the whole `bar` module.

Your [Webpack config file](https://webpack.js.org/configuration/) will be different in Electron from the web. Here's an example of a Webpack configuration file for Electron using Webpack version 4x.

```
{
  target: 'electron-renderer',
  mode: 'production', // this will minify the bundle
  // ...
};
```

Now that you have a bundled, minified file of your app, make sure to require it from your index file. The second step is to remove the `node_modules` folder from your app using the `--ignore` method shown hereinabove.

# Make platform specific apps

You can also make platform-specific apps in order to compress your app even more. For example, for your Mac users, you can use [this module](https://www.npmjs.com/package/electron-installer-dmg) to create `dmg images` of your app.

# Electrino

[Electrino](https://medium.com/dailyjs/put-your-electron-app-on-a-diet-with-electrino-c7ffdf1d6297) is an interesting, opinionated approach with the ambition of creating build sizes 0.1% the size of a regular Electron app. It is still a work in progress with its limitations but worth checking out. It might fit your needs.

That's it! It does not seem much, but these little tricks can help you to dramatically reduce your app size, making it faster for your users to download. Cheers!
