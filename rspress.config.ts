import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Brand New Podcast',
  description: 'Discover the latest and greatest podcasts with our reviews!',
  icon: "/logo.jpeg",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  base: '/rspress-blog',
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/codinggeoff' },
      // { icon: 'discord', mode: 'link', content: '/feed.xml' },
      // { icon: 'youtube', mode: 'link', content: '/feed.xml' },
      { icon: 'twitter', mode: 'link', content: 'https://x.com/supergreatgeoff' },
      { icon: 'linkedin', mode: 'link', content: 'https://www.linkedin.com/in/%E5%86%A0%E8%87%BB-%E9%99%88-667231243/' }
    ],
  },
});
