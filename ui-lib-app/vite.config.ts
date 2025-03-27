// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Determine if we're building the library
  const isLibrary = mode === 'library';
  
  const commonConfig = {
    plugins: [
      react(),
      // Generate TypeScript declarations when building the library
      isLibrary && dts({
        include: ['src/components'],
        exclude: ['src/App.jsx', 'src/main.jsx', 'src/features/**/*'],
        outDir: 'dist/types',
      })
    ].filter(Boolean),
  };

  if (isLibrary) {
    // Library build configuration
    return {
      ...commonConfig,
      build: {
        lib: {
          entry: resolve(__dirname, 'src/components/index.js'),
          name: 'MyUILibrary',
          formats: ['es', 'umd'],
          fileName: (format) => `my-ui-library.${format}.js`,
        },
        outDir: 'dist/lib',
        rollupOptions: {
          // Make sure to externalize deps that shouldn't be bundled
          external: ['react', 'react-dom'],
          output: {
            // Provide global variables to use in the UMD build
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
    };
  } else {
    // App build configuration (default)
    return {
      ...commonConfig,
      // Regular app settings
      build: {
        outDir: 'dist/app',
      }
    };
  }
});