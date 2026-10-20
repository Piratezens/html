#include<stdio.h>
int main()
{
    int a ;
    int b ;
    int c;
    printf("enter the value of a");
    scanf("%d",&a);
    printf("enter the value of b");
    scanf("%d",&b);
    printf("enter the value of c");
    scanf("%d",&c);
    int d=b*b-4*a*c;
    if(d>0)
    {
        printf("roots are real and distinct");
    }
    else if(d==0)
    {
        printf("roots are real and equal");
    }
    else
    {
        printf("roots are imaginary");
    }
    int root;
    root=(-b+sqrt(d))/(2*a);
    printf("the first root is %d",root);
    root=(-b-sqrt(d))/(2*a);
    printf("the second root is %d",root);
}
