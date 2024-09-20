function getSize(width, height, depth){
  let volume = width * height * depth;
  let totalSurfaceArea = 2 * (depth * height + depth * width + height * width);
  return [totalSurfaceArea, volume];
}
