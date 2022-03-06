import React, { useState } from "react";
import TopBanner from "./top-banner";

export default function Banner({
  banner: {
    headline,
    text,
    button_text: buttonText,
    button_link: buttonLink,
    width,
    max_width: maxWidth,
    height,
    max_height: maxHeight,
    type,
    background_color: backgroundColor,
    button_background_color: buttonBackgroundColor,
  },
}) {
  const [displayBanner, setDisplayBanner] = useState(true);

  const topBanner = (
    <TopBanner
      headline={headline}
      text={text}
      buttonText={buttonText}
      buttonLink={buttonLink}
      height={height}
      maxHeight={maxHeight}
      backgroundColor={backgroundColor}
      buttonBackgroundColor={buttonBackgroundColor}
      closeButtonClicked={() => setDisplayBanner(false)}
    ></TopBanner>
  );

  if (!displayBanner) {
    return null;
  }

  switch (type) {
    case "bottom":
      return bottomBanner;
    case "top":
      return topBanner;
    default:
      return centeredBanner;
  }
}
