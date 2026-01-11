import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const isGitHub = process.env.VITE_GITHUB === "true";

  return {
    plugins: [react()],
    base: isGitHub ? "/Portfolio/" : "/",
  };
});
