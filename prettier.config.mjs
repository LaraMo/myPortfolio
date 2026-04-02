/** @type {import('prettier').Config} */
export default {
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  printWidth: 100,
  importOrder: ["^react(-dom)?$", "^next", "<THIRD_PARTY_MODULES>", "", "^@/", "^[./]"],
  importOrderParserPlugins: ["typescript", "jsx"],
  importOrderTypeScriptVersion: "5.4.0",
};
