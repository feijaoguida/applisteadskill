export function limitarTexto(texto: string, limite: number = 30): string {
  return texto.length > limite ? texto.slice(0, limite) + "..." : texto;
}
