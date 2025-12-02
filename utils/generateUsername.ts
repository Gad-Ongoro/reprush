export const generateRandomUsername = () => {
  const gymWords = [
    "flex", "lift", "gains", "beast", "iron", "sweat",
    "shred", "muscle", "fit", "bulk", "power", "barbell",
    "pump", "core", "strength"
  ];

  const adjectives = [
    "crazy", "wild", "mega", "ultra", "super", "turbo",
    "alpha", "steel", "prime", "heavy"
  ];

  const randomWord = gymWords[Math.floor(Math.random() * gymWords.length)];
  const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNum = Math.floor(1000 + Math.random() * 9000);

  return `${randomAdj}${randomWord}${randomNum}`;
};
