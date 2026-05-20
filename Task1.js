function stringLengthFrequency(strings) {
  if (!Array.isArray(strings) || strings.length === 0) return [];

  const countFrequency = {};
  for (const str of strings) {
    if (typeof str !== "string") continue;
    const length = str.length;
    countFrequency[length] = (countFrequency[length] ?? 0) + 1;
  }

  if (Object.keys(countFrequency).length === 0) return [];

  const maxFrequency = Math.max(...Object.values(countFrequency));

  return strings.filter(
    (str) =>
      typeof str === "string" && countFrequency[str.length] === maxFrequency,
  );
}
