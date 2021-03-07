export function reverseInteger(x: number): number {
  const nums = String(Math.abs(x));
  if (nums.length < 2) return x;

  const max = 0x80000000;
  const reversed = Math.sign(x) * Number(nums.split('').reverse().join(''));

  return Math.abs(reversed) < max ? reversed : 0;
}
