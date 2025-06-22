import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

// NOTE: Disabling these for production build
// Checkout This: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules

/*
const eslintConfig = [
    ...compat.config({
        extends: [
            "next/core-web-vitals",
            "next/typescript"
        ],
        rules: {
            "@typescript-eslint/no-unused-vars": "off", // Disable the TypeScript unused-vars rule
        },
    }),
]
*/

export default eslintConfig;
