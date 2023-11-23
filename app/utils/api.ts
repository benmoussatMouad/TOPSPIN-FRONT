export const getAllMatches: any = async () => {
  const data = await fetch(`https://lablabee.online/schedule`);
  return data.json();
};
