const ethers = require("ethers");

const rpcUrl = "https://cloudflare-eth.com/";

//connection to the ethereum network
const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
]

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
    const name = await contract.name();
    const symbol = await contract.symbol();
    const totalSupply = await contract.totalSupply();

    const balance = await contract.balanceOf("0x51C72848c68a965f66FA7a88855F9f7784502a7F");

    console.log(name, symbol, ethers.utils.formatEther(balance));
};

main();
