import eslint from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import reactHooks from 'eslint-plugin-react-hooks';
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
    plugins: {'react-hooks': reactHooks},
    rules: {
      '@typescript-eslint/no-extraneous-class': 'off',
      ...reactHooks.configs.recommended.rules,
    },
  }
);
