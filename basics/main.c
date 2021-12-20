#include <stdio.h>
static int a = 77;
// static int a = 22;shows error
int main()
{
    static int a; //different static variable
    // static int a = 22;//cannot declare a variable two times in a function; can do it in global scope though
    a = 3;
    a = 4;
    printf("%d\n", a);
    fun();
    fun();
    return 0;
}
void fun()
{
    printf("%d\n", a);
    static int a = 22;
    a--;
    printf("%d\n", a);
}