import math

n = int(input())
line = [input().split() for _ in range(n)]

result = 0

for element in line:
    num1 = int(element[0])
    num2 = int(element[2])
    operator = element[1]

    if operator == "+":
        result += num1 + num2

    if operator == "-":
        result += num1 - num2

    if operator == "*":
        result += math.trunc(num1 * num2)

    if operator == "/":
        result += math.trunc(num1 / num2)

print(result)

# sum이 파이썬 내장함수라서 에러가 뜬다.
