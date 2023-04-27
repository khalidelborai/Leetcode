function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>()
  for (const str of strs) {
    const sorted = str.split("").sort().join("")
    if (!map.has(sorted)) {
      map.set(sorted, [])
    }
    map.get(sorted)?.push(str)
  }
  return Array.from(map.values())
}

// Test case
const testCases: string[][] = [
  ["eat", "tea", "tan", "ate", "nat", "bat"],
  [""],
  ["a"],
]

const expectedResults: string[][][] = [
  [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
  [[""]],
  [["a"]],
]

const verifyResults = (
  actualResult: string[][],
  expectedResult: string[][]
) => {
  if (actualResult.length !== expectedResult.length) {
    return false
  }
  for (const result of actualResult) {
    let found = false
    for (const expected of expectedResult) {
      if (result.length !== expected.length) {
        continue
      }
      if (result.every((val) => expected.includes(val))) {
        found = true
        break
      }
    }
    if (!found) {
      return false
    }
  }
  return true
}

for (let i = 0; i < testCases.length; i++) {
  const actualResult = groupAnagrams(testCases[i])
  const expectedResult = expectedResults[i]
  console.log(`Test case ${i + 1}: ${JSON.stringify(testCases[i])}`)
  console.log(
    verifyResults(actualResult, expectedResult)
      ? `✅ Passed`
      : `❌ Failed` +
          `\n\t | Actual Result: ${JSON.stringify(actualResult)}` +
          `\n\t | Expected Result: ${JSON.stringify(expectedResult)}`
  )
}
