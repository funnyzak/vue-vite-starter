import legacy from '@vitejs/plugin-legacy'

import { defineConfig, loadEnv } from "vite";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), "");

  // console.log(command, mode, ssrBuild);
  // console.log(env.APP_ENV, process.env.APP_ENV);

  const viteConfig = {
    // 项目根目录（index.html 文件所在的位置）。可以是一个绝对路径，或者一个相对于该配置文件本身的相对路径。
    root: "./",
    // 开发或生产环境服务的公共基础路径。
    base: "./",
    resolve: {
      alias: {
        "@": "./",
      },
      // 导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会影响 IDE 和类型支持。
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    },
    build: {
      target: "es2015",
      outDir: "dist",
      // 指定生成静态资源的存放路径（相对于 build.outDir）。
      assetsDir: "static",
      // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
      assetsInlineLimit: 4096,
      // 启用/禁用 CSS 代码拆分。当启用时，在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在其被加载时插入。
      cssCodeSplit: true,
    },
    // vite 配置(环境变量)
    define: {
      __APP_ENV__: env.APP_ENV
    },
    server: {
      host: "0.0.0.0",
      port: 1703,
      open: false,
      cors: true,
      // 代理配置
      proxy: {
        // 字符串简写写法
        "/foo": "http://localhost:4567",
        // 选项写法
        "/api": {
          target: "http://jsonplaceholder.typicode.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
        // 正则表达式写法
        "^/fallback/.*": {
          target: "http://jsonplaceholder.typicode.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/fallback/, ""),
        },
        // 使用 proxy 实例
        "/api2": {
          target: "http://jsonplaceholder.typicode.com",
          changeOrigin: true,
          configure: (proxy, options) => {
            // proxy 是 'http-proxy' 的实例
          },
        },
        // Proxying websockets or socket.io
        "/socket.io": {
          target: "ws://localhost:3000",
          ws: true,
        },
      },
    },
    preview: {
      open: false,
      // 跨域配置
      cors: true,
    },
    plugins: [
      vue(),
      legacy({
        polyfills: true,
        targets: ["defaults", "not IE 11"],
      }),
    ],
  };

  if (command === "serve") {
    // dev 独有配置
    viteConfig.server.open = true;
  } else {
    // command === 'build'
    // build 独有配置
  }

  return viteConfig;
})
