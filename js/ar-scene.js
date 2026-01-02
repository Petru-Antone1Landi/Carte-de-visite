import { createMarker } from "./marker.js";

window.addEventListener("DOMContentLoaded", () => {
  const scene = document.createElement("a-scene");

  scene.setAttribute("embedded", "");
  scene.setAttribute("arjs", "sourceType: webcam;");

  const marker = createMarker();
  scene.appendChild(marker);

  // Caméra
  const camera = document.createElement("a-entity");
  camera.setAttribute("camera", "");
  scene.appendChild(camera);

  document.body.appendChild(scene);
});
