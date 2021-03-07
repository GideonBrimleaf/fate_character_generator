const chunkos = (array, chunkoSize) => {
  const chunks = [];
  let currentIndex = 0

  while (currentIndex < array.length) {
    chunks.push(array.slice(currentIndex, currentIndex + chunkoSize))
    currentIndex += chunkoSize
  }
  return chunks;
}

export default chunkos;
