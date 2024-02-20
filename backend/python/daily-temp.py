class Solution:
    def dailyTemperatures(self, tempratures: list[int]) -> list[int]:
        ans = [0]*len(tempratures)
        stack = []

        for i, temp in enumerate(tempratures):
            while stack and stack[-1][0] < temp:
                prevTemp, prevIndex = stack.pop()
                ans[prevIndex] = i = prevIndex
            stack.append((temp, i))
        return ans