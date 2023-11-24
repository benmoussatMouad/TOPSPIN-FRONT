export const getAllMatches: any = async () => {
  console.log("====================================");
  console.log(process.env.NEXT_PUBLIC_API_URL);
  console.log("====================================");
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/schedule`);
  return data.json();
};
