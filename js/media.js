export function createImage(src, position, size) {
  const image = document.createElement("a-image");

  image.setAttribute("src", src);
  image.setAttribute("position", position);
  image.setAttribute("width", size.split(" ")[0]);
  image.setAttribute("height", size.split(" ")[1]);

  return image;
}

export function createVideo(src, position, size) {
  const video = document.createElement("a-video");

  video.setAttribute("src", src);
  video.setAttribute("position", position);
  video.setAttribute("width", size.split(" ")[0]);
  video.setAttribute("height", size.split(" ")[1]);
  video.setAttribute("autoplay", "true");
  video.setAttribute("loop", "true");

  return video;
}
