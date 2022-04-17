# webpack

A webpack-based project that uses TypeScript and `webpack-dev-server`.

> At its core, webpack is a static module bundler for modern JavaScript applications.
> 
> -- <cite>https://webpack.js.org/concepts/</cite>

## Design

Webpack has steadily grown over the years since its inception in 2012 (!) to become an extensive "software building
machine" for web-based projects. As such, I would like to create a working example of a webpack-based project in 2021.
The project will use TypeScript. I like plain JavaScript too, but for the sake of a webpack example project, it's
interesting to splice in TypeScript which requires a compilation build step.

## Instructions

Follow these instructions to build and run the project.

1. Install dependencies
   * `npm install`
1. Build the project:
   * `npm run build`
1. Alternatively, build the project continuously and serve the output:
   * `npm run start`
   * The project is ready to be viewed in the browser! The browser should open automatically.

## Webpack Philosophy

My understanding of webpack's philosophy is "bake stuff into JavaScript files when possible". The most famous example of
this is webpack's support for CSS. Webpack takes the "CSS-in-JS" route, where the application's CSS styles are
actually embedded into `.js` files which means that the application loads CSS styles via JavaScript and not via the
classic (traditional? idiomatic?) pattern of loading CSS via `<link rel="stylesheet"...>` tags or `<style...>` tags.

Webpack's extensive user guide (much appreciated, great work on the guides!) describes the pattern for loading CSS in
under the [Asset Management sub-guide](https://webpack.js.org/guides/asset-management/#loading-css).

## Wish List

General clean ups, ITEMs and things I wish to implement for this project:

* [x] DONE Bug. The source `index.html` file is not actually used.
* [x] DONE Add CSS. Make sure to use the idiomatic webpack way. 

## Reference 

* [webpack guide for TypeScript](https://webpack.js.org/guides/typescript/)
  * Most of this example project is based on the excellent webpack guides.
