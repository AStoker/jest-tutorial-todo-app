# todo-app-final

This project is bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Start dev web server

    yarn run start

## Build the app in production mode

    yarn run run build

It builds `dist/*bundle.[hash].js`, updates index.html with hashed js bundle file name. To deploy to production server, copy over both the generated `index.html` and all the `dist/*` files.

For example
```
index.html
dist/entry.bundle.12345.js
```
Copy to production root folder
```
root_folder/index.html
root_folder/dist/entry.bundle.12345.js
```

## Unit Tests

    yarn run test

Run unit tests in watch mode.

    yarn run test:watch


## Clear tracing cache

In rare situation, you might need to run clear-cache after upgrading to new version of dumber bundler.

    yarn run clear-cache

## index.html

`index.html` is generated from `_index.html` every time `yarn run build` runs. It is handled by dumber's `onManifest()` option, check `gulpfile.js` for details.
