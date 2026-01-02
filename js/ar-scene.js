window.addEventListener("DOMContentLoaded", () => {
  const scene = document.createElement("a-scene");

  scene.innerHTML = `
    <a-box position="0 0 -3" rotation="0 45 0" scale="1 1 1" color="red"></a-box>
    <a-camera></a-camera>
  `;

  document.body.appendChild(scene);
});
