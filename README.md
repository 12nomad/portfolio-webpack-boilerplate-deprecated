## DEPRECATED

### Images
.Place all your images in src/img/...

### Vendor
.In case you use vendor:
Replace the entry in webpack.common.js to
// entry: {
// main: "./src/index.js",
// vendor: "./src/vendor.js"
// },
Then create a vendor.js file in the src folder and import what you need, for example:
// import "bootstrap";

### .scss Files
- Delete \_config.scss and \_utilities.scss if not needed
- Also remove @import in main.scss

### Favicon
.Favicon not included, so add it in the production build

