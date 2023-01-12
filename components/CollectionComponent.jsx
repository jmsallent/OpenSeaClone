import React from "react";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import NFTCard from "./NFTCard";
const style = {
  bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full object-cover`,
  infoContainer: `w-screen px-4`,
  midRow: `w-full flex justify-center text-white`,
  endRow: `w-full flex justify-end text-white`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  socialIconsWrapper: `w-44`,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  title: `text-5xl font-bold mb-4`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
};

const nfts = [
  {
    id: "id1",
    name: "#7941",
    image:
      "https://i.seadn.io/gae/4PmAMubiVIYGZBLow0JkBVSDZJDtJ28coIKNflRBv1P7sbun0ULI7csd34ZF4X3aU5FfxhS0WKk8zzv5CSVHhf9l1JSHRCJuLEEMepg?auto=format&w=1000",
    likes: 11,
  },
  {
    id: "id2",
    name: "#7670",
    image:
      "https://i.seadn.io/gae/yfvGI0Xid13tCDCSpYhUMmBgk_GSn3G6_kNKetVvhkIWVvJFgCzME_5EzldKiI4Z9MQl_vuisibqUcrhV9rTJzViMvfY2haZyNVCiZo?auto=format&w=1000",
    likes: 22,
  },
  {
    id: "id3",
    name: "#377",
    image:
      "https://i.seadn.io/gae/0RgDdXAcYY1P4enPZJvI0yHLTmmvBSOj3qkrV0Tqphqht5tNwE-f8atv8Kvz06Vj1vDITdAAG47fUO4AdmYZBuqk4e1-p-_t7EZW?auto=format&w=1000",
    likes: 32,
  },
];
const title = "This is the title";
const listings = [];
export default function CollectionComponent() {
  return (
    <div className="overflow-hidden">
      <div className={style.bannerImageContainer}>
        <img
          className={style.bannerImage}
          src={
            "https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?auto=format&w=1920"
          }
          alt="banner"
        />
      </div>
      <div className={style.infoContainer}>
        <div className={style.midRow}>
          <img
            className={style.profileImg}
            src={
              "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=256"
            }
            alt="profile image"
          />
        </div>
        <div className={style.endRow}>
          <div className={style.socialIconsContainer}>
            <div className={style.socialIconsWrapper}>
              <div className={style.socialIconsContent}>
                <div className={style.socialIcon}>
                  <CgWebsite />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <AiOutlineInstagram />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <AiOutlineTwitter />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <HiDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.title}>Title</div>
        </div>
        <div className={style.midRow}>
          <div className={style.createdBy}>
            Created by <span className="text-[#2081e2]">Creator</span>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.statsContainer}>
            <div className={style.collectionStat}>
              <div className={style.statValue}>5</div>
              <div className={style.statName}>items</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>{""}</div>
              <div className={style.statName}>owners</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img
                  src="https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?auto=format&w=1920"
                  alt="eth"
                  className={style.ethLogo}
                />
                {"collection?.floorPrice"}
              </div>
              <div className={style.statName}>floor price</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img
                  src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                  className={style.ethLogo}
                />
                {"collection?.volumeTraded"}.5K
              </div>
              <div className={style.statName}>volume traded</div>
            </div>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.description}>{"collection.description"}</div>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {nfts.map((nftItem, id) => (
          <NFTCard
            key={id}
            nftItem={nftItem}
            // title={collection?.title}
            title={title}
            listings={listings}
          />
        ))}
      </div>
    </div>
  );
}
