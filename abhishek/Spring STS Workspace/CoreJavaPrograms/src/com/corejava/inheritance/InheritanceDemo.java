package com.corejava.inheritance;

import java.util.Arrays;
import java.util.List;

public class InheritanceDemo {

	public static void main(String[] args) {
		//B b= (B) new A();//Child class cannot take object of Parent class
		A b=new B();
		b.show();
		
//		String s="ab c de";
//		for(int i=0;i<s.length();i++) {
//		System.out.println(s.charAt(i));
//		}
////
//		String[] str=s.split("\\s+");
//		List<String> list=Arrays.asList(str);
//		
//		System.out.println("List Size:"+list.size());
//		list.forEach(System.out::println);
	}
	
}
