import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": path.resolve(__dirname, "src/components"),
			"@entities": path.resolve(__dirname, "src/domain/entities"),
			"@enums": path.resolve(__dirname, "src/domain/enums"),
			"@services": path.resolve(__dirname, "src/domain/services"),
		},
		extensions: [".js", ".ts", ".jsx", ".tsx"],
	},
});
