import {nodeResolve} from '@rollup/plugin-node-resolve'

export default {
    input: 'transpiled/index.js',
    output: {
        file: 'dist/index.mjs',
        format: 'esm'
    },

    // Include the code from the other npm workspaces in the bundle.
    //
    // Specifically, this has the effect of bundling the code from 'animal-names'.
    //
    // 'animal-lister' needs to be published as one package without any dependencies. This makes for a good development
    // experience for consuming applications, like 'forest-program'. Why should 'forest-program' have any knowledge of
    // the internal project structure of 'animal-lister'? Should 'forest-program' need to know that 'animal-lister' depends
    // on 'animal-names'? No. 'animal-lister' should appear as its own thing with no other dependencies.
    plugins: [nodeResolve()]
}
