export const getAllMatches: any = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/schedule`);
  return data.json();
};
