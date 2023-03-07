import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="568" cy="210" r="8" />
    <rect x="522" y="230" rx="5" ry="5" width="220" height="10" />
    <circle cx="583" cy="230" r="8" />
    <rect x="539" y="215" rx="5" ry="5" width="220" height="10" />
    <circle cx="592" cy="222" r="8" />
    <rect x="484" y="216" rx="5" ry="5" width="220" height="10" />
    <circle cx="569" cy="238" r="8" />
    <rect x="497" y="224" rx="5" ry="5" width="220" height="10" />
    <circle cx="592" cy="542" r="23" />
    <circle cx="125" cy="125" r="125" />
    <circle cx="575" cy="556" r="25" />
    <rect x="1" y="289" rx="15" ry="15" width="280" height="32" />
    <rect x="574" y="540" rx="0" ry="0" width="18" height="30" />
    <rect x="498" y="395" rx="0" ry="0" width="24" height="3" />
    <rect x="2" y="414" rx="15" ry="15" width="119" height="46" />
    <rect x="153" y="414" rx="15" ry="15" width="125" height="46" />
    <rect x="1" y="331" rx="15" ry="15" width="280" height="67" />
  </ContentLoader>
);

export default MyLoader;
