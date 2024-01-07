import { defineConfig } from "vite";
import copy from "rollup-plugin-copy";
// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    browserField: false,
    mainFields: ["module", "jsnext:main", "jsnext"],
  },
  plugins: [
    copy({
      targets: [
        { src: "./src/assets/icons/*", dest: "./.vite/build/assets/icons" },
      ],
    }),
  ],
});
