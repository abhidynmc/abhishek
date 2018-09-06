package com.corejava.prog.array;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

public class RemoveDuplicate {

	public static void main(String[] args) {
		int[] arr= {1,2,3,3,2,2,5,6,5,7,5,5,5,5,5,5,5,8,7,5,4,7,8,9,2,4,5,5,5,6,6,6,6,6,6,6,6};
		System.out.println("Given Array:");
		Arrays.stream(arr).forEach(e->System.out.print(e+" "));

		//1. Using Stream
		System.out.println();
		System.out.println("Array after using distinct of stream:");
		Arrays.stream(arr).distinct().forEach(e->System.out.print(e+" "));
		
		//2. Using Standard Array Manipulation
       	System.out.println();
        System.out.println("Array after using Standard Array Manipulation:");
        Arrays.stream(removeDuplicateElements(arr)).forEach(e->System.out.print(e+" "));
       
        //3. Using Collection.
        System.out.println();
        System.out.println("Array after removal using collection:");
        removeDuplicateCol(arr).stream().forEach(e->System.out.print(e+" "));
        //printing array elements  
		       int[] t=new int[5];
		       if (t.length==0) {
				System.out.println("T is zero");
				t[0]=5;
	}

	}
	
	public static int[] removeDuplicateElements(int ar[]){
		int n=ar.length;
//        if (n==0 || n==1){  
//            return n;  
//        }  
		Arrays.sort(ar);//sorting array
		int[] temp = new int[n];  
        int j = 0;  
        for (int i=0; i<n-1; i++){  
            if (ar[i] != ar[i+1]){  
                temp[j++] = ar[i];  
            }  
         }  
        temp[j++] = ar[n-1];
      //1,2,3,4,5,6,7,8,9
        // Changing original array
//        System.out.println("Unique Array:");
        int[] temp2 = new int[j];
        for (int k=0; k<j; k++)  
            temp2[k]=temp[k];    
        //
        return temp2;
    }       
	public static Set<Integer> removeDuplicateCol(int[] input){
		List<Integer> list=new ArrayList<>();
		for(Integer i:input) {
			list.add(i);
		}
		Set<Integer> sortedList=new TreeSet<Integer>();
		sortedList.addAll(list);

		return sortedList;
	} 
}
