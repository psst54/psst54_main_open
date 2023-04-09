module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "babel-plugin-styled-components",
    ["@babel/plugin-transform-runtime"],
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".svg"],
        alias: {
          "^~(.+)": "./src/\\1",
          "^#(.+)": "./src/components/\\1",
        },
      },
    ],
  ],
};
