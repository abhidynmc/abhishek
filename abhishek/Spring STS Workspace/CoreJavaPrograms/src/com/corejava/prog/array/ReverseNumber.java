package com.corejava.prog.array;

import java.util.Scanner;
class ReverseNumber
{
   public static void main(String args[])
   {
      int num=0;
      int reversenum =0;
      System.out.println("Input your number and press enter: ");
      //This statement will capture the user input
      Scanner in = new Scanner(System.in);
      //Captured input would be stored in number num
      num = in.nextInt();
      /* for loop: No initialization part as num is already
       * initialized and no increment/decrement part as logic
       * num = num/10 already decrements the value of num
       */
      //601
      for( ;num != 0; )
      {
          reversenum = reversenum * 10;//0, 10, 100
          reversenum = reversenum + num%10;//0+ 1=1,10,106  
          num = num/10;//60, 6
      }

      System.out.println("Reverse of specified number is: "+reversenum);
   }
}