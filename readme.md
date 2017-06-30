-In Babel a 'preset' is a collection of Babel plugins

ex:

npm install babel-cli babel-preset-es2015 --save

- Instead of creating .babelrc file, but babel config in package.json

-npm run babel

Plugins:

npm install babel-plugin-transform-object-rest-spread


If you are using ES6’s import syntax in your application’s entry point, you should instead import the polyfill at the top of the entry point to ensure the polyfills are loaded first:

import "babel-polyfill";

If not using modules:

<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
