import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,

  {
    name: 'app/local-rules',
    rules: {
      // App-internal screens/widgets use single-word names (bar, map, taps…); there's no
      // custom-element/DOM-tag collision risk here, so the multi-word rule isn't useful.
      'vue/multi-word-component-names': 'off',
      // This codebase wraps chart.js and introspects slot vnode props / untyped EMF API JSON,
      // where `any` is sometimes warranted. Keep it visible as a warning rather than blocking.
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
)
