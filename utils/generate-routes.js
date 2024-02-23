const fs = require('fs');
const path = require('path');
const recast = require('recast');
const builders = recast.types.builders;

// The content directories
const contentDirectories = [];

// Get the routes from the content directories
const routes = contentDirectories.flatMap((dir) => {
  return fs.readdirSync(dir).map((file) => {
    return (
      '/' +
      path
        .join(dir, path.basename(file, path.extname(file)))
        .replace('content/', '')
    );
  });
});

fs.readFile('./nuxt.config.js', 'utf8', function (err, file) {
  if (err) {
    console.log(err);
    return;
  }

  // Parse the file into an AST
  const ast = recast.parse(file);

  // Find the generate.routes key and add the routes
  recast.visit(ast, {
    visitObjectExpression(path) {
      path.node.properties.forEach((property) => {
        if (property.key.name === 'generate') {
          property.value.properties.forEach((subProperty) => {
            if (subProperty.key.name === 'routes') {
              routes.forEach((route) => {
                // Check if the route is already in the array
                if (
                  !subProperty.value.elements.some(
                    (element) => element.value === route
                  )
                ) {
                  subProperty.value.elements.push(builders.literal(route));
                }
              });
            }
          });
        }
      });
      return false;
    },
  });

  // Generate JavaScript code from the AST
  const output = recast.print(ast).code;

  // Write the file
  fs.writeFile('./nuxt.config.js', output, 'utf8', function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully added routes to the file.');
    }
  });
});
