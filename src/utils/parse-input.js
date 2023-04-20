// แปลงทุกตัวเป็น number
export const parseInput = (...inputs) => {
  return inputs.map((str) => Number(str));
};
// let r = parseInput("500", "2", "100", 600);
