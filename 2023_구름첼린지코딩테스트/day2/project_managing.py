import math

# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean

# 1. 줄바꿈 Enter를 누르고 그다음에 또 입력을 받아야 된다.
# 2. 입력 받은 N, T, M, C를 각 변수에 저장을 한다.
# 3.

# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean

N = int(input())
T, M = map(int, input().split())
C = [int(input()) for _ in range(N)]

sum = M

for a in C:
    sum += a
M = sum % 60
print(sum)
T = (math.trunc(sum / 60) + T) % 24

print(T, M)
