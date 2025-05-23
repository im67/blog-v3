// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
// component
import Sidebar from './components/Siderbar.vue'

// page
import Layout from './layouts/Layout.vue'

import './style.css'

export default {
  Layout: h(Layout, null, {
    sidebar: h(Sidebar)
  }),
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
