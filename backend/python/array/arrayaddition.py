def add(arr1, arr2):
    l = max(len(arr1), len(arr2))
    result = [0 for j in range(l)]
    c = 0
    i = len(arr1) - 1
    j = len(arr2) - 1
    r = 0
    l -= 1

    while i >= 0 and j >= 0:
        r = arr1[i] + arr2[j] + c
        i -= 1
        j -= 1
        c = r // 10
        result[l] = r % 10
        l -= 1
    
    while i >= 0:
        r = arr1[i] + c
        i -= 1
        c = r // 10
        l -= 1

    while j >= 0:
        r = arr1[j] + c
        j -= 1
        result[l] = r % 10
        l -= 1

    if c != 0:
        new_result = [0 for j in range(len(result) + 1)]
        t = len(new_result) - 1
        while t > 0:
            new_result[t] = result[t - 1]
            t -= 1
        new_result[0]  = c
        return new_result
    return result

arr1 = [9, 10, 20, 78, 90, 23]
arr2 = [1, 3, 4,5 ,7, 10]
result = add(arr1, arr2)
print(result)
      