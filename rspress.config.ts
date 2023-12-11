import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '褚鹏飞的博客',
  description: '褚鹏飞的博客',
  icon: "/logo.jpeg",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  base: '/rspress-blog',
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/MagicalBridge' },
    ],
  },
});
