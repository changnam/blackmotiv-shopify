function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
export  async function delay(ms = 2000) {
    console.log("Start");
    await sleep(ms); // ⏳ Waits for 2 seconds
    console.log(`After ${ms} seconds`);
  }

export function ensureStartWith(stringToCheck, startsWith){
  return stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;
}

export function createUrl(pathName, params){
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
  return `${pathName}${queryString}`;
}