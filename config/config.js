import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

export const config = {
  MARKETPLACE_ADDRESS: process.env.MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS: process.env.NFT_COLLECTION_ADDRESS,
};

export const useMarketPlaceContract = async () => {
  return await sdk.getMarketplace(config.MARKETPLACE_ADDRESS);
};

export const useNFTContract = async () => {
  return await sdk.getMarketplace(config.NFT_COLLECTION_ADDRESS);
};
