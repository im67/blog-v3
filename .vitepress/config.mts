import { _escapeHtml, defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from "unplugin-auto-import/vite"
import hljs from 'highlight.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "im6767‘s blog",
  description: "im6767's blog project",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],
  },
  vite: {
    plugins: [
      tailwindcss(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        imports: ['vue', '@vueuse/core'],
        dts: './auto-imports.d.ts',
      })],
  },
  markdown: {
    highlight(code, lang) {
      // 检查语言是否支持
      if (lang && hljs.getLanguage(lang)) {
        return `<pre><code class="hljs language-${lang}">${hljs.highlight(code, { language: lang }).value
          }</code></pre>`
      }
      // 不支持的语言，做 HTML 转义
      return `<pre><code class="hljs">${code}</code></pre>`
    },
    config(md) {
      // 保存原来的 image renderer
      const defaultRender = md.renderer.rules.image || function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
      };

      md.renderer.rules.image = function (tokens, idx, options, env, self) {
        const token = tokens[idx];
        const srcIndex = token.attrIndex('src');
        if (srcIndex >= 0) {
          const src = token.attrs?.[srcIndex][1];
          // 如果以 /yuque/ 开头，就加前缀
          if (src && src.startsWith('/yuque/') && token.attrs) {
            token.attrs[srcIndex][1] = 'https://im6767.top' + src;
          }
        }
        // 继续默认渲染
        return defaultRender(tokens, idx, options, env, self);
      }
    }
  }
})
