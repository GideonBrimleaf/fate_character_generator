const chunkos = (arr, chunkoSize) => {
  var chunks = [], 
  currentIndex = 0

  while (currentIndex < arr.length) {
    // grab a slice of the array the same size as the chunk
    // either start at the beginning of the array or the current
    // starting point, stored in currentIndex
    chunks.push(arr.slice(currentIndex, currentIndex += chunkoSize));
  }
  return chunks;
}

export default chunkos;