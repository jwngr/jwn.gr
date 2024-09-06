import eslint from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // ESLint.
  eslint.configs.recommended,

  // TypeScript.
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,

  // Astro.
  ...eslintPluginAstro.configs.recommended,

  // Custom.
  {
    files: ['**/*.{js,jsx,ts,tsx,astro,mjs}'],
    ignores: ['**/dist'],
    rules: {
      '@typescript-eslint/no-extraneous-class': 'off',
    },
  }
);
