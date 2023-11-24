export const getAllMatches: any = async () => {
  console.log("====================================");
  console.log(process.env);
  console.log("====================================");
  const data = await fetch(`https://lablabee.online/schedule`);
  return data.json();
};
