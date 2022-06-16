import {fileURLToPath} from "node:url";
import * as path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    mode: "development",
    entry: "./src/index.js",
    devtool: "source-map",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        library: 'writeAnimalsToBody',
    },
};
