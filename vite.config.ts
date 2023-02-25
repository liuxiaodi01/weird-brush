import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Pages from "vite-plugin-pages";
const excludeRoutes = ["login", "register", "all"];
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Pages({
      dirs: "src/views",
      exclude: ["**/components/**"],
      extendRoute(route: any, parent: any) {
        if (excludeRoutes.includes(route.name))
          return { ...route, meta: { auth: false } };
        return {
          ...route,
          meta: {
            ...route.meta,
            auth: true,
          },
        };
      },
      importMode: "async",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 8091,
  },
});
