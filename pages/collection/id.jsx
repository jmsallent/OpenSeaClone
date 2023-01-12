import React from "react";
import CollectionComponent from "../../components/CollectionComponent";
import HeaderComponent from "../../components/Header";

const style = {
  wrapper: ``,
};

export default function CollectionPage() {
  return (
    <div className={style.wrapper}>
      <HeaderComponent />
      <CollectionComponent />
    </div>
  );
}
