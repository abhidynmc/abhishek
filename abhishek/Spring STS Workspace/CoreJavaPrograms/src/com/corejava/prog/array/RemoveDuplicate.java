package com.corejava.prog.array;

import java.util.Arrays;

public class RemoveDuplicate {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] arr= {1,2,3,3,2,2,5,6,5,7,5,5,5,5,5,5,5,8,7,5,4,7,8,9,2,4,5,5,5,6,6,6,6,6,6,6,6};
		Arrays.sort(arr);//sorting array  
        
        removeDuplicateElements(arr);  
        //printing array elements  
       int[] t=new int[5];
       if (t.length==0) {
		System.out.println("T is zero");
		t[0]=5;
	}

	}
	
	public static void removeDuplicateElements(int arr[]){
		System.out.println("Given Array:");
		for (int i=0; i<arr.length; i++)  
	           System.out.print(arr[i]+" ");
		int n=arr.length;
//        if (n==0 || n==1){  
//            return n;  
//        }  
        int[] temp = new int[n];  
        int j = 0;  
        for (int i=0; i<n-1; i++){  
            if (arr[i] != arr[i+1]){  
                temp[j++] = arr[i];  
            }  
         }  
        temp[j++] = arr[n-1];
      //1,2,3,4,5,6,7,8,9
        // Changing original array
        System.out.println("Unique Array:");
        for (int k=0; k<j; k++)  
            System.out.print(temp[k]+" ");    
        //
    }       
}
