# 49. Group Anagrams

## Description

Given an array of strings `strs`, group *the anagrams* together. You can return the answer in any order.

An *Anagram* is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Examples

1. Example 1:

    *Input*: strs = ["eat","tea","tan","ate","nat","bat"]

    *Output*: [["bat"],["nat","tan"],["ate","eat","tea"]]

2. Example 2:

    *Input*: strs = [""]

    *Output*: [[""]]

3. Example 3:

    *Input*: strs = ["a"]

    *Output*: [["a"]]

### Constraints

* `1 <= strs.length <= 10^4`
* `0 <= strs[i].length <= 100`
* `strs[i]` consists of lowercase English letters.
  