const zones: number[] = [0, 0.55, 0.75, 0.90, 1.05, 1.2];

export function calculateZones(ftp: number) {
  if (ftp <= 0) return null;
  const results: number[] = [];
  const lows = zones.map((zone) => ftp * zone);
  lows.map((low) => {
  	results.push(Math.floor(low - 1), Math.floor(low))
  });
  results.shift();
  results.pop();
  return results;
}

