import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import tailwindcss from "tailwindcss";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// plugins
export default defineConfig({
	plugins: [react(), tailwindcss()],
});
