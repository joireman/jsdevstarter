

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

## Babel

- Configure with `.bablerc` or `package.json`
- Do you transpile your build scripts
    - ES5 does not need to be transpiled
    - But transpiled gives latest features and consistent coding styel
