import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(
      "https://eth-mainnet.g.alchemy.com/v2/4BOdZL3Fx6cLWNFDrf6HelqxP_cClKY6"
    ),
    [sepolia.id]: http(
      "https://eth-sepolia.g.alchemy.com/v2/4BOdZL3Fx6cLWNFDrf6HelqxP_cClKY6"
    ),
  },
  ssr: true,
});
