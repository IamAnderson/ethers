const ethers = require("ethers");

const rpcUrl = "https://cloudflare-eth.com/";

//connection to the ethereum network
const provider = new ethers.providers.JsonRpcProvider(rpcUrl);


const main = async () => {
     const balance = await provider?.getBalance("0xA8FeCC6202D2e3cF75eCCB13ED12FE41c7aa46Ab");
    console.log(ethers.utils.formatEther(balance))
 }

 main();
