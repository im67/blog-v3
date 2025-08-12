module.exports = {
  content: [
    '.vitepress/theme/**/*.{vue,js,ts,jsx,tsx,md}',  // VitePress 内容
    './content/**/*.md',
    './**/*.md',                   
  ],
  plugins: [
    require('@tailwindcss/line-clamp'),
    // 其他插件
  ],
}