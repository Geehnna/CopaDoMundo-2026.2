import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Esse plugin ajuda o Vite a encontrar imagens ou arquivos exportados do Figma
function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        // Quando encontrar um caminho começando com 'figma:asset/', 
        // ele redireciona automaticamente para a pasta 'src/assets'
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // Os plugins do React e do Tailwind são essenciais para o funcionamento do Make.
    // Mesmo que você não esteja usando Tailwind agora, não os remova!
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      //Atalho @ para referir SCR. e evitar caminhos gigantes como '../../../../src'
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Aqui definimos quais tipos de arquivos podem ser importados "puros" (como texto/url). Atenção: nunca adicione arquivos .css, .tsx ou .ts nesta lista.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
