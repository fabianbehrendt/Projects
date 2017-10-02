function MakeSet (x) {
  x.parent = x
  x.rank = 0
}

function Find (x) {
  if (x.parent != x) {
    x.parent = Find(x.parent)
  }

  return x.parent
}

function Union (x, y) {
  let xRoot = Find(x)
  let yRoot = Find(y)

  // x and y are already in the same set
  if (xRoot == yRoot) {
    return
  }

  // x and y are not in the same set, so we merge them
  if (xRoot.rank < yRoot.rank) {
    xRoot.parent = yRoot
  } else if (xRoot.rank > yRoot.rank) {
    yRoot.parent = xRoot
  } else {
    // Arbitrarily make one root the new parent
    yRoot.parent = xRoot
    xRoot.rank = xRoot.rank + 1
  }
}
