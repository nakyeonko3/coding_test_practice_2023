# -*- coding: utf-8 -*-repeaㅔ
# UTF-8 encoding when using korean
import math

# 1. 일단 두개의 숫자를 입력 받고 공백으로 구분하고 엔터를 누르면 입력이 된다.
# 2. 공식을 구현해본다.w * (1 + r/30)
# 3. 소숫점 이하의 값을 버린다. math.trunc(n)

# input으로 입력은 문자형이다.

weight, repeat = map(int, input().split())

print(math.trunc(weight * (1 + repeat / 30)))
