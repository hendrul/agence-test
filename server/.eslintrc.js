module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "globals": {
    "alert": true,
    "watcher": true,
  },
  "rules": {
    //eslint rules
    "semi": [2, "never"],
    "import/no-extraneous-dependencies": 1,
    "no-restricted-syntax": 0,
    "prefer-destructuring": 0,
    "no-use-before-define": 0,
    "no-param-reassign": 0,
    "import/no-dynamic-require": 0,
    "global-require": 0
  }
}
