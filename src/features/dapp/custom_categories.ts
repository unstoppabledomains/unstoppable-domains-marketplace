/*
Meroku dapp store sends a big list of categories, out of which dapp stores might want to show limited categories
or a few categories clustered up, this file contains a list of Categories and subcategories that needs to be shown in dappstore
*/
export const categories = {
  message: "success",
  data: [
    {
      category: "Utility",
      subCategory: [],
    },
    {
      category: "Tooling",
      subCategory: [
        "Messaging",
        "Wallet",
      ],
    },
    {
      category: "Social",
      subCategory: [],
    },
    {
      category: "Infrastructure",
      subCategory: [
        "Oracles",
        "Identity",
        "On-Ramp/Off-Ramp",
      ],
    },
    {
      category: "Metaverse",
      subCategory: [],
    },
    {
      category: "Gaming",
      subCategory: [
      ],
    },
    {
      category: "NFT",
      subCategory: [
        "Marketplace",
        "PFPs",
        "NFT Tooling / Infra",
      ],
    },
    {
      category: "DAO",
      subCategory: [],
    },
    {
      category: "DeFi",
      subCategory: [
        "Decentralized Exchanges",
        "DeFi - Other",
      ],
    },
    {
      category: "Education",
      subCategory: [],
    },
    {
      category: "Others",
      subCategory: [],
    },
  ],
};
