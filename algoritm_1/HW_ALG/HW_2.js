// 1 уровень сложности:
// Level 1
// ----------------------------
// ​​Какова временная сложность?


// void test1(int n)
// {
//    if (n==1)
//       return;
//    for (int i=1; i<=n; i++)
//        for (int j=1; j<=n; j++)
//            System.out.println("*")
//            break;
// }

// Временная сложность этой функции составляет O(n^2), где n - параметр функции.



// ---------------------------
// ​​Какова временная сложность?

// void test2(int n)
// {
//    int a = 0;
// for (i = 0; i < n; i++)
//    for (j = n; j > i; j--)
//        a = a + i + j;

// }

// Внешний цикл выполняется n раз, а внутренний цикл выполняется n - i раз на каждой итерации внешнего цикла.

// Таким образом, общее количество итераций внутреннего цикла равно 0 + 1 + 2 + … + n-1, что равно сумме арифметической прогрессии. Формула для суммы первых n натуральных чисел: n * (n-1) / 2.

// Таким образом, общее время выполнения циклов можно оценить как O(n^2).



// ----------------------------------

// Какова временная сложность?


// void test3(int n)
// {
//    int i, j, a = 0;
// for (i = n/2; i <=n; i++)
//    for (j = 2; j <=n; j=j*2)
//        a=a+n/2;

// }

// Временная сложность данного кода составляет O(n*logn).