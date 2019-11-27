## Helper function to create JSON for gims.clinical GIs

React JS app for creating JSON.
When a user click on the input field for JSON it opens form where user can set all required data.
When user click on save button the JSON is generated and written into the input field.

The following options are present it the form:

label - textfield
type - radio with the following options: textfield, checkbox, select, radios
options - array (only present if type is select, radio)
key - textfield
value - textfield

User can create, edit and delete options

# Requirements

You need to have Node.js with npm installed.

Inside this directory install the dependencies:

```
npm install
```

### `Build`

Go make your changes in the app. After you are done, run

```
npm run build
```

to generate the `new build file`. After that, clear the cache and reload the Drupal site.

### `Tests`

Launches the test runner in the interactive watch mode.

```
npm test
```
