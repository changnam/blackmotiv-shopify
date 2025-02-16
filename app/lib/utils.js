function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
export  async function delay(ms = 2000) {
    console.log("Start");
    await sleep(ms); // ⏳ Waits for 2 seconds
    console.log(`After ${ms} seconds`);
  }