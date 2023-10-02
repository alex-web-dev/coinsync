export function useText() {
  function capitalize(str) {
    return str && str[0].toUpperCase() + str.slice(1);
  }

  return {
    capitalize,
  };
}
