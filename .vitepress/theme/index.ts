// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
// component
import Sidebar from './components/Sidebar.vue'
import HeaderMenu from './components/HeaderMenu.vue'

// page
import Layout from './layouts/Layout.vue'
import HomePage from './components/HomePage.vue'
import ArticleList from './components/ArticleList.vue'

import './style.css'

export default {
  Layout: h(Layout, null, {
    sidebar: h(Sidebar),
    header: h(HeaderMenu)
  }),
  enhanceApp({ app, router, siteData }) {
    app.component('HomePage', HomePage);
    app.component('ArticleList', ArticleList)
  }
}
