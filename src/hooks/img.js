export function useImage() {
  function getImage(path) {
    return new URL(`../assets/img/${path}`, import.meta.url).href;
  }

  return {
    getImage,
  };
}
