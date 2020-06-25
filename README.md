#Favicons
.Rename your favicon to "logo.png" and replace the default one in the src folder...

#Images
.Place all your images in src/img/...

#Vendor
.In case you use vendor:
Replace the entry in webpack.common.js to
// entry: {
// main: "./src/index.js",
// vendor: "./src/vendor.js"
// },
Then create a vendor.js file in the src folder and import what you need, for example:
// import "bootstrap";
