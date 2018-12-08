package com.corejava.exception;

public class CustomExceptionDemo {

	public static void main(String[] args) {

		int a=0;
		int b=10;
		try {
			int c=b/a;
			System.out.println("Program started....");
			System.out.println("Number : "+c);
			}catch(Exception e) {
				throw new FoundInfinityException("Infinity Found", e);
			}
		}
	}

