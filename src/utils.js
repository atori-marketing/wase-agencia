export const resolveUrl = (url) => {
  if (!url) return '';

  // Se a URL já for local (começa com /), retorna como está
  if (url.startsWith('/')) return url;

  // Extrai o nome do arquivo da URL do WordPress
  // Exemplo: https://waseag.com.br/wp-content/uploads/2025/09/cropped-logo-wase.webp -> cropped-logo-wase.webp
  try {
    const filename = url.split('/').pop();
    // Assume que os arquivos estão na raiz da pasta public ou em /assets/
    // Se o usuário subir para public/, o caminho no browser é /filename
    return `/${filename}`;
  } catch (e) {
    return url;
  }
};
