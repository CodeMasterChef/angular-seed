
## `Install`

Run `npm install` and `bower install` 


## `Development`

### `serve`

For the development phase, the command `gulp serve` launches a server which supports live reload of your modifications.

Its usage is described in the chapters [Development server](#development-server) and [File watching & pre-processing](#file-watching--pre-processing)

### `test`

For testing, a fully working test environment is shipped with some examples. It uses Karma (with `gulp test`) for the unit tests, and Protractor for the end-to-end tests (with `gulp protractor`).

More information in the [Test environment configured](#test-environment-configured) chapter.

### `build`

The generator brings a state of the art optimization process with the command `gulp build` or simply `gulp`. It's fully described in the [Optimization process](#optimization-process) chapter.

### `inject`

This generator goes further than the Yeoman guidelines by shipping a fully working file injection process which is able to automatically write all of your `script` and `link` tags in your `index.html`