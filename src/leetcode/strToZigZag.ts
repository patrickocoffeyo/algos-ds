export function strToZigZag(s: string, numRows: number): string {
  if (numRows === 1) return s;

  let y = 0;
  let isZigging = true;
  const rows: string[][] = [...(new Array(numRows) as number[])].map(() => []);

  for (let i = 0; i < s.length; i++) {
    rows[y].push(s[i]);
    if (y === numRows - 1) isZigging = false;
    if (y === 0) isZigging = true;
    y = isZigging ? y + 1 : y - 1;
  }

  return rows.reduce((str, row) => str + row.join(''), '');
}
