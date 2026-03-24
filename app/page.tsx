import Motion from "./components/Motion";


const page = async () => {
  // Pause this function for 3 seconds… then continue
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
    <Motion/>
    </>
  );
};

export default page;
