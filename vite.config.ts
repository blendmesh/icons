import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Define o ponto de entrada da sua biblioteca
      entry: 'src/index.ts',
      // Nome global da biblioteca (para os ambientes que usam UMD)
      name: 'blendmesh-icons',
      // Função para gerar o nome do arquivo final
      fileName: (format) => `blendmesh-icons.${format}.ts`,
    },
    rollupOptions: {
      // Marque como _external_ as dependências que não devem ser empacotadas
      external: ['react', 'react-dom'],
      output: {
        // Especifica quais variáveis globais serão utilizadas quando os módulos externos forem importados (para builds UMD/IIFE)
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
