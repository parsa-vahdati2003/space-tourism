// import { defineConfig } from "vite";
// import { resolve } from "node:path";

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       input: {
//         home: resolve(__dirname, "index.html"),
//         destination: resolve(__dirname, "html/destination-moon.html"),
//         crew: resolve(__dirname, "html/crew-commander.html"),
//         technology: resolve(__dirname, "html/technology-spaceport.html"),
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import { resolve } from "node:path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "assets/**/*",
          dest: "assets",
        },
      ],
    }),
  ],

  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        destination: resolve(__dirname, "html/destination-moon.html"),
        crew: resolve(__dirname, "html/crew-commander.html"),
        technology: resolve(__dirname, "html/technology-spaceport.html"),
      },
    },
  },
});
