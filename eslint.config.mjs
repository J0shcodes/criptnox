import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  ...compat.config({
    extends: ["prettier"],
    plugins: ["@typescript-eslint", "tailwindcss"],

    rules: {
      "tailwindcss/classnames-order": "off",
    },

    parser: "@typescript-eslint/parser",

    overrides: [
      {
        files: ["*.ts", "*.tsx"],
        parserOptions: {
          project: ["./tsconfig.json"],
          projectService: true,
          tsconfigRootDir: __dirname,
        },
        extends: [
          "next/core-web-vitals",
          "plugin:@typescript-eslint/recommended",
          "plugin:tailwindcss/recommended",
        ],
      },
    ],
  }),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
