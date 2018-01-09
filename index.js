const app = "I don't do much."
function destructivelyAppendKitten(kittenString) {
  kittens.push(kittenString)
  return kittens
}

function destructivelyPrependKitten(kittenString) {
  kittens.unshift(kittenString)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
