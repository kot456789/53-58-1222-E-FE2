// Практические задачи: какова временная сложность?


// task #1

// START
// READ number n
// IF n == 1 THEN return
// FOR i = 1, i <= n, i + 1
// 	FOR j = 1; j <= n, j + 1
// 		print "*"
// 		BREAK
// END

// Решение:
// временная сложность данного кода составляет O(n^2)


// task #2

// START
// READ number n
// numbers i = 0, j = 0, a = 0
// FOR i = n/2, i <= n; i + 1
// 	FOR j = 2, j <= n, j * 2
// 		a = a + n / 2
// END

// Решение:
// временная сложность данного кода составляет O((n/2) * log2(n)), что можно сократить до O(nlog(n)).

// task #3

// START
// READ number n
// number a = 0
// FOR i = 0, i < n, i + 1
// 	FOR j = n, j > i, j - 1
// 		a = a + i + j
// END

// Решение:
// временная сложность данного кода составляет   O(1) + O(M) = O(M

// task #4

// START
// READ number n
// numbers a = 0, i = n
// WHILE i > 0
// 	a = a + i
// 	i = i / 2
// END

// Решение:

// временная сложность данного кода составляет O(log2(n))