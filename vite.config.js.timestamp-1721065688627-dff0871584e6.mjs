// vite.config.js
import { sentryVitePlugin } from "file:///C:/Users/Victor/Documents/developmental%20assignments/Programming%20Projects/JavaScript_projects/3D_Apple_Website/node_modules/@sentry/vite-plugin/dist/esm/index.mjs";
import { defineConfig } from "file:///C:/Users/Victor/Documents/developmental%20assignments/Programming%20Projects/JavaScript_projects/3D_Apple_Website/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Victor/Documents/developmental%20assignments/Programming%20Projects/JavaScript_projects/3D_Apple_Website/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "jsm-61",
      project: "javascript-react"
    })
  ],
  build: {
    sourcemap: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxWaWN0b3JcXFxcRG9jdW1lbnRzXFxcXGRldmVsb3BtZW50YWwgYXNzaWdubWVudHNcXFxcUHJvZ3JhbW1pbmcgUHJvamVjdHNcXFxcSmF2YVNjcmlwdF9wcm9qZWN0c1xcXFwzRF9BcHBsZV9XZWJzaXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxWaWN0b3JcXFxcRG9jdW1lbnRzXFxcXGRldmVsb3BtZW50YWwgYXNzaWdubWVudHNcXFxcUHJvZ3JhbW1pbmcgUHJvamVjdHNcXFxcSmF2YVNjcmlwdF9wcm9qZWN0c1xcXFwzRF9BcHBsZV9XZWJzaXRlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9WaWN0b3IvRG9jdW1lbnRzL2RldmVsb3BtZW50YWwlMjBhc3NpZ25tZW50cy9Qcm9ncmFtbWluZyUyMFByb2plY3RzL0phdmFTY3JpcHRfcHJvamVjdHMvM0RfQXBwbGVfV2Vic2l0ZS92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IHNlbnRyeVZpdGVQbHVnaW4gfSBmcm9tIFwiQHNlbnRyeS92aXRlLXBsdWdpblwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBzZW50cnlWaXRlUGx1Z2luKHtcclxuICAgICAgb3JnOiBcImpzbS02MVwiLFxyXG4gICAgICBwcm9qZWN0OiBcImphdmFzY3JpcHQtcmVhY3RcIixcclxuICAgIH0pLFxyXG4gIF0sXHJcblxyXG4gIGJ1aWxkOiB7XHJcbiAgICBzb3VyY2VtYXA6IHRydWUsXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNmdCLFNBQVMsd0JBQXdCO0FBQzlpQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04saUJBQWlCO0FBQUEsTUFDZixLQUFLO0FBQUEsTUFDTCxTQUFTO0FBQUEsSUFDWCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLEVBQ2I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
