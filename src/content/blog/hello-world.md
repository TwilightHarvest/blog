---
title: 'Hello, world: binary search done right'
description: A first post that doubles as a style test for code, math, and tables.
pubDate: 2026-10-19
tags: [algorithms, meta]
---

This is the first post on the blog. It's also a style test: it uses every kind of formatting I expect to need.

## The invariant

Binary search finds a target in a sorted array of length $n$ in $O(\log n)$ time. The cleanest way to get it right is to pick an invariant and never break it. Use the half-open interval $[lo, hi)$, where everything left of `lo` is $< x$ and everything at or right of `hi` is $\ge x$.

Each iteration halves the interval, so the number of iterations $T(n)$ satisfies

$$
T(n) = T\left(\left\lfloor \tfrac{n}{2} \right\rfloor\right) + 1 \implies T(n) = \lfloor \log_2 n \rfloor + 1.
$$

## Implementations

```ts
function lowerBound(xs: number[], x: number): number {
	let lo = 0;
	let hi = xs.length;
	while (lo < hi) {
		const mid = lo + ((hi - lo) >> 1); // avoids overflow in languages with fixed-width ints
		if (xs[mid] < x) lo = mid + 1;
		else hi = mid;
	}
	return lo;
}
```

```python
from bisect import bisect_left

def contains(xs: list[int], x: int) -> bool:
    i = bisect_left(xs, x)
    return i < len(xs) and xs[i] == x
```

```bash
# run the tests
python -m pytest -q tests/test_search.py
```

## Comparison

| Variant      | Interval    | Returns                     |
| ------------ | ----------- | --------------------------- |
| lower bound  | $[lo, hi)$  | first index with $x_i \ge x$ |
| upper bound  | $[lo, hi)$  | first index with $x_i > x$  |
| classic      | $[lo, hi]$  | any index with $x_i = x$    |

> Off-by-one errors in binary search are usually a sign that the invariant was never written down.
