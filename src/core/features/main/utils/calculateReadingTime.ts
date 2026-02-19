export function calculateReadingTime(content: string | undefined) {
  if (!content) return 1;
  return Math.ceil(content.split(/\s+/).length / 200);
}
