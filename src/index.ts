const zones: number[] = [0, 0.55, 0.75, 0.90, 1.05, 1.2];

export function calculateZones(ftp: number) {
  if (ftp <= 0) return null;
  const results: number[] = [];
  const newFtp = Math.round(ftp)
  const lows: number[] = zones.map((zone) => newFtp * zone);
  lows.map((low) => {
  	results.push(Math.floor(low - 1), Math.floor(low))
  });
  const finalResults: number[] = results.slice(1,11)
  return finalResults;
}

