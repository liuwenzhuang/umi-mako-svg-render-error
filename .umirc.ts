import { defineConfig } from "umi";

export default defineConfig({
  mako: {},
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: "pnpm",
});
