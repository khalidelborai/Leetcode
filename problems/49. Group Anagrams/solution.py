from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dic = {}
        for s in strs:
            sorted_s = "".join(sorted(s))
            if sorted_s not in dic:
                dic[sorted_s] = [s]
            else:
                dic[sorted_s].append(s)
        return list(dic.values())


testCases: List[List[str]] = [
    ["eat", "tea", "tan", "ate", "nat", "bat"],
    [""],
    ["a"],
]

expectedResults: List[List[List[str]]] = [
    [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
    [[""]],
    [["a"]],
]

def verifyResult(
    testCase: List[str], expectedResult: List[List[str]]
) -> bool:
    # check if the result has the same length
    if len(testCase) != len(expectedResult):
        return False
    
    # check if the result has the same elements regardless of order
    for result in expectedResult:
        if result not in testCase:
            return False
    
    return True

def test():
    solution = Solution()
    for i in range(len(testCases)):
        result = solution.groupAnagrams(testCases[i])
        if verifyResult(result, expectedResults[i]):
            print("Test case", i + 1, "✅ passed!")
        else:
            print("Test case", i + 1, "❌ failed!")

if __name__ == "__main__":
    test()


