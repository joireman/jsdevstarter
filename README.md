

## Development Web Servers

- `http-server`
- `live-server`
- `express` (`*`)
- `budo`
- `webpack` dev server
- `browsersync`

## Automation

### Options

- `grunt`
    - First, uses a `gruntfile`
    - File oriented write to disk after each step
    - Configuration over code
    - Large plugin ecosystem
- `gulp`
    - In memroy streams for step to step commutin
    - Code over configuration
    - Large plugin ecosystem
- `npm` scripts:
    - Declare direclty in `package.json`
    - Convention based pre and post scripts
    - Use tools directly, avoid another layer of abstraction
    - No need for separate plugins
    - Better documentation
    - Easy to learn

### npm scriptgs

- `pre{taskname}`: run this task before `taskname`
- `post{taskname}`: run this task after `taskname`
- `npm-run-all --parallel task1 task2 ...`: runs all tasks in parallel


## Transpilers

- Over 100 languages that compi
    - Dart, ELM, GWB
- Most Mature
    - Babel: modern standardized Javascript
        - writing standarized Javascript
        - Leverage full JS ecosystem
        - No type defs or annotation required
    - Typescript: superset of javascript, ES5 + ES6 + ...
        - type-safety and enanched autocompletion
        - code refactoring
        - additional non-standard features
    - Elm
        - compiles down to Javascript
        - clean syntax
        - immutable data structures
        - friendly errors

### Babel

- Configure with `.bablerc` or `package.json`
- Do you transpile your build scripts
    - ES5 does not need to be transpiled
    - But transpiled gives latest features and consistent coding styel

## Bundling

- Package project into a file or files(s) for deploymebnt
- Improve performance

### Formats

- IIFE, AMD, CFS, UMD, ES6
- Choose ES6 (ES2015)
    - standardized
    - statically analyzable: improved autocompletion support, intelligent refactoring
    - tree shaking: elimination of dead code
    - easier to read
    - named import and default exports

### Bundlers

- Intelligent packaging for -
- Options
    - RequireJS: first popular bundler, but falling out of favor
    - Browserify
        - bundle npm packages for the web
        - large plugin ecosystem to handle minification, ...
    - Webpack (`*`)
        - bundles more than just JS
        - import CSS, images, HTML, fonts, etc.
        - hot reloading web-server
        - Bundle splitting
        - tree shaking coming in webpack 2
    - Rollup
        - first bundler to implement `tree shaking`
        - produces faster code than Browserify and Webpack
    - JSPM
        - Uses SystemJS, universal module loader
        - Can load modules at runtime
        - Has it's own package manager
        - Uses Rollup

## Linting

- JSLint: original, opinionated
- JSHint: offres more configurability than JSLint
- ESLint (`*`): de facto standard

### Configuring ESLint

- Decisions
  - Config format
    - lots of options
    - can use package.json or .eslintrc
  - Which built-in tools to use?
    - catches common errors out of the box
  - Warnings or errors?
    - Warnings don't break the build, but errors do
    - Choose based on context
  - What plugins do we use?
    - reference: `github.com/dustinspecker/awesome-eslint`
  - Use a preset?
    - recommended preset from eslint
    - can use rules from airbnb, standardjs, or others

**Note**: eslint doesn't automatically watch files, but you can
implement it using webpack and `eslint-loader` or add `eslint-watch`
to enable this functionality.

## Testing

Testing addresses `unit testing` not integration or ui testing.

### 6 Key Decisions

1. Testing Framework
  - Mocha (`*`): popular, mature, flexible
  - Jasmine:
  - Tape: simple configuration
  - QUnit: older
  - AVA:
  - Jest: Facebook, wrapper over Jasmine
2. Assertion Libraries
  - Jasmine and Jest come with library build in
  - Mocha does not
  - Chai (`*`): popular assertion library []
3. Helper Libraries
  - JSDOM (`*`): simulates the browsers DOM
  - Cherrio: jQuery for the server
4. Where to Run Tests
  - Browser: Karma, Testem
  - Headless Browser: PhantomJS
  - In-memory DOM: JSDOM (`*`)
5. Where do Test Files Live
  - Centralized
    - less noise in src folder
    - deployment confusion
  - Alongside (`*`)
    - makes imports easier
    - tests are clearly visible
    - convenient to open tests and code at the same time
    - easy file moves
    - no recreating directory structure
6. When should tests run?
  - Every time we hit save
    - Facilitates TDD
    - Automated
    - Should run quickly
  - Unit tests
    - small unit is tested
    - fast
    - run on save
  - Integration testing
    - involves clicking and waiting
    - slow
    - run on demand or only in QA

### Continuous Integration Server

- Prevent "Works on my machine" syndrome
  - bad merge, change to build scripts, node version conflicts, forgotten updates
- CI Server
  - Builds on a secondary machine after commit is pushed
  - Runs test suite
  - Check code coverage
  - Can also automate deployment
- Options
  - TravisCI: hosted solution for Linux
  - Appveyor: Windows-based solution
  - Jenkins: can be installed on your own servers
  - CircleCI
  - Semaphore
  - SnapCI
