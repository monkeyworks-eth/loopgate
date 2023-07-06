import { Unlockable } from "./types";

/*********************************************************
Replace the `unlockables` below with your own content. 
Here are two examples:

1️⃣ Unlock a Submarined file by owning one specific NFT.
{ 
  cid: "<YOUR_CID>", 
  nftId: ["<YOUR_NFT_ID"]
}

2️⃣ Unlock a Submarined file by owning multiple NFTs.
{
  cid: "<YOUR_CID",
  nftId: [
    "<YOUR_FIRST_NFT_ID", "<YOUR_SECOND_NFT_ID", 
  ]
}
*********************************************************/

const unlockables: Unlockable[] = [
  {
    cid: "bafybeibhnv3o2t3za74kmwfuh2iosxqvwrcep47vx2fozgtnxlioid4ywm", // HTML blog example
    nftId: [
      "0xdc6c7692808c12c3ed8b8903c648b37a9c1899aeb39a4ff4ea2e11bc2b0b52c3",
      "0x26ab238d840a839a18a1a035f29f61b7ec84dd9cd747691b5e61231a9dc84994",
      "0xf79a9ea5787f590bdf99826938a79714e759752880b9c091dbc3c0e7214ee14e",
      "0x11f267d91ea96a9dc89830d11080d5940e076cc08edb3719cc25c89121d94323",
      "0xcf7e25210bef96dab6e2bf52da51adb5121bacd32f1867f252894afbcee09291",
      "0x738da4420c04c239e5b6f583683153c932936a888f55b00d959f4ddf982eec23",
    ], // You need to own all 6 keycards to unlock this.
  },
];


export { unlockables };
