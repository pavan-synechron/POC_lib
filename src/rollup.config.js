import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default {
  input: "./src/components/index.tsx",
  output: [
    { file: "dist/index.js", format: "cjs" },
    {
      file: "dist/index.es.js",
      format: "es",
      exports: "named",
    },
  ],
  plugins: [
    babel({ excude: "node_modules/**", presets: ["@babel/preset-react"] }),
    external(),
    resolve(),
    typescript(),
    postcss({
      modules: true,
      plugins: [],
      minimize: true,
    }),
  ],
};
