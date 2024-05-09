// let merokuJsonString = `{
//     "message": "success",
//     "data": [
//       {
//         "category": "books",
//         "subCategory": [
//           "ebooks",
//           "audiobooks",
//           "document-readers"
//         ]
//       },
//       {
//         "category": "business",
//         "subCategory": [
//           "communication",
//           "project-management",
//           "human-resources",
//           "decentralized-business-tools"
//         ]
//       },
//       {
//         "category": "developer tools",
//         "subCategory": [
//           "discovery tool",
//           "developer infra"
//         ]
//       },
//       {
//         "category": "education",
//         "subCategory": [
//           "learning tools",
//           "reference",
//           "language-learning",
//           "stem"
//         ]
//       },
//       {
//         "category": "entertainment",
//         "subCategory": [
//           "music",
//           "video",
//           "video-streaming",
//           "music-streaming",
//           "live-events",
//           "nft-marketplaces"
//         ]
//       },
//       {
//         "category": "defi",
//         "subCategory": [
//           "banking",
//           "personal-finance",
//           "exchanges",
//           "insurance",
//           "on-ramping",
//           "off-ramping",
//           "payments",
//           "finance",
//           "airdrop tool",
//           "others",
//           "tooling",
//           "prediction markets",
//           "lending-and-borrowing",
//           "infrastructure"
//         ]
//       },
//       {
//         "category": "food and drink",
//         "subCategory": [
//           "cooking",
//           "recipes",
//           "restaurant-finding"
//         ]
//       },
//       {
//         "category": "games",
//         "subCategory": [
//           "action",
//           "adventure",
//           "puzzle",
//           "role-playing",
//           "strategy",
//           "racing",
//           "board ",
//           "simulation",
//           "word",
//           "metaverse"
//         ]
//       },
//       {
//         "category": "health and fitness",
//         "subCategory": [
//           "workout-apps",
//           "meditation",
//           "nutrition",
//           "sleep-trackers",
//           "medical"
//         ]
//       },
//       {
//         "category": "lifestyle",
//         "subCategory": [
//           "home-automation",
//           "fashion",
//           "dating"
//         ]
//       },
//       {
//         "category": "kids",
//         "subCategory": []
//       },
//       {
//         "category": "news",
//         "subCategory": [
//           "sports-news",
//           "magazines",
//           "decentralized-news-platforms",
//           "newspapers",
//           "live-news"
//         ]
//       },
//       {
//         "category": "photography",
//         "subCategory": [
//           "photo-editing",
//           "camera-apps",
//           "photo-sharing"
//         ]
//       },
//       {
//         "category": "productivity",
//         "subCategory": [
//           "note-taking",
//           "task-management",
//           "time-management",
//           "calendar",
//           "decentralized-collaboration-tools",
//           "graphics and design"
//         ]
//       },
//       {
//         "category": "shopping",
//         "subCategory": [
//           "ecommerce",
//           "nft-marketplaces",
//           "price aggregator"
//         ]
//       },
//       {
//         "category": "social networking",
//         "subCategory": [
//           "decentralized-social-networks",
//           "messaging"
//         ]
//       },
//       {
//         "category": "sports",
//         "subCategory": [
//           "team-management",
//           "live-scores"
//         ]
//       },
//       {
//         "category": "travel",
//         "subCategory": [
//           "navigation",
//           "accommodation-booking",
//           "transportation",
//           "trip-planning"
//         ]
//       },
//       {
//         "category": "utilities",
//         "subCategory": [
//           "file-management",
//           "browsers",
//           "security-and-privacy",
//           "wallets",
//           "weather"
//         ]
//       },
//       {
//         "category": "nft",
//         "subCategory": [
//           "art",
//           "pfps",
//           "domain names"
//         ]
//       },
//       {
//         "category": "gambling",
//         "subCategory": []
//       },
//       {
//         "category": "social",
//         "subCategory": [
//           "social media"
//         ]
//       },
//       {
//         "category": "personalization",
//         "subCategory": [
//           "themes",
//           "wallpapers",
//           "customization-tools"
//         ]
//       }
//     ]
//   }`;
 //,"developer-tools.identity"
var dappstoreMaping = `{
  
  "Utilities": ["utilities.file-management","utilities.browsers","utilities.security-and-privacy"], 

  "Messaging": "social-networking.messaging",

  "Wallets": "utilities.wallets",

  "Infrastructure": ["developer-tools"],

  "Metaverse": "games.metaverse",

  "Gaming": ["games.strategy","games.simulation","games.role-playing","games.studios","games.action","games.racing","games.adventure","games.puzzle","games.board","games.word"],

  "Naming Services": "naming-services",
  
  "NFT Marketplaces": "nft.nft-marketplaces",

  "NFT Projects": ["nft.art","nft.tooling","nft.pfps"],

  "Registrars": ["nft.domain-names"],

  "DAO": ["productivity.decentralized-collaboration-tools","productivity.decentralized-collaboration-tools-investing"],

  "DeFi": ["finance.exchanges","finance.defi","finance.others","finance.ramp"],

  "Education": "education"
  
}`;
// var merokuAPIData = JSON.parse(merokuJsonString).data;
var dappstoreMapingData = JSON.parse(dappstoreMaping);
// var merokuCategoryList: string[] = [];
var polygonMappedList: string[] = [];

// merokuAPIData.map((e) => merokuCategoryList.push(e.category));

// Get de-deuplicated list of mapped categories
(Object.values(dappstoreMapingData) as string[]).map((c) => {
  if (Array.isArray(c)) {
    for (var i = 0; i < c?.length; i++) { 
      if (!polygonMappedList.some(e => e === c[i].split(".")[0])) {
        polygonMappedList.push(c[i].split(".")[0]);
      }
    }
  } else {
    if (!polygonMappedList.some(e => e === c.split(".")[0])) {
      polygonMappedList.push(c.split(".")[0]);
    }
  }
});

// var othersList: string[] = merokuCategoryList.filter(
//   (value) => !polygonMappedList.includes(value.toLowerCase())
// );

interface CatSubCat {
  category: string | string[];
  subCategory?: string | string[];
}

// Create a Map object to be passed
const customToMerokuMapping: Map<string, string> = new Map(
  Object.entries(JSON.parse(dappstoreMaping))
);

/**
 * mapping: A Map that contains mapping from custom's Category and Sub Category to Meroku's Category and Sub Category
 *
 */

const customToMerokuCategory = (
  category: string | string[] | undefined,
  merokuData: any,
  subCategory?: string | string[] | undefined
): CatSubCat => {
  let output: CatSubCat = { category: "" };
  var merokuCategoryList: string[] = [];

  if (merokuData !== undefined) {
    // Get de-duplicated list of categories for dapps on store
    merokuData.data.map((e) => merokuCategoryList.push(e.category));
    // Get de-duplicated list of categories for dapps on store without a mapping
    var othersList: string[] = merokuCategoryList.filter(
      (value) => !polygonMappedList.includes(value.toLowerCase())
    );
    if (category === "Others") {
      output["category"] = othersList;
    }
  }

  const mapping = customToMerokuMapping;

  const key = subCategory
    ? [category, subCategory].join(".")
    : (category as string);
  // Get Polygon mapping for custom category name
  const value = mapping.get(key);
  if (value) {
    // If mapping is a list, iterate list, seperate categories / subcategories, and de-duplicate
    if (Array.isArray(value)) {
      output["category"] = [];
      output["subCategory"] = [];
      for (var i = 0; i < value?.length; i++) {
        const [c, sc] = value[i].split(".");
        if (!output["category"].some(e => e === c)) {
          output["category"].push(c);
        }
        if (sc) {
          if (!output["subCategory"].some(e => e === sc)) {
            output["subCategory"].push(sc);
          }
        }
      }
    } else {
      const [c, sc] = value.split(".");
      output["category"] = c;
      if (sc) {
        output["subCategory"] = sc;
      }
    }
  }
  return output;
};
// const getOthersCategoryList = (
//   merokuCategoryAPIData: Array<{
//     category: string,
//     subCategory: Array<string>
//   }>
// ): Array<string> => {
//   var merokuCategoryList: string[] = [];
//   merokuCategoryAPIData.map((e) => merokuCategoryList.push(e.category));
//   var othersList: string[] = merokuCategoryList.filter(
//     (value) => !polygonMappedList.includes(value.toLowerCase())
//   );
//   return othersList;
// };

export { customToMerokuCategory, polygonMappedList };

