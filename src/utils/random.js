export const getRandom = (element) => {
    const randomIndex = Math.floor(Math.random() * element.length);
    return randomIndex;
  }