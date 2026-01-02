import { createImage, createVideo } from "./media.js";

export function createMarker() {
  const marker = document.createElement("a-marker");

  marker.setAttribute("type", "pattern");
  marker.setAttribute("url", "assets/patterns/pattern-card.patt");

  // Image AR (logo)
  const logo = createImage("assets/logo.png", "0 0.5 0", "0.6 0.6");

  marker.appendChild(logo);

  return marker;
}
