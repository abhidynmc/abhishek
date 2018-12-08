package com.corejava.prog.hash;


class Exec0 extends Exception{}
class Exec1 extends Exec0{}
public class Practice {
	public static void main(String[] args) {
		try {
			throw new Exec1();
		}catch(Exec0 ex) {
			System.out.println("Execo caught");
		}catch(Exception e) {
			System.out.println("Exception");
		}
	}
}