package com.corejava.prog.hash;

import java.util.HashMap;
import java.util.concurrent.ConcurrentHashMap;

public class HashDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ConcurrentHashMap<Bean, String> h=new ConcurrentHashMap<Bean, String>();
		h.put(new Bean("ABC",23), "ABC");
		h.put(new Bean("XYZ",23), "XYZ");
		h.put(new Bean("ABC",23), "ABC");
		Bean b=new Bean("HUG", 65);
		h.put(b, "ty");
		h.put(b, "dds");
		
		h.entrySet().stream().forEach(e->{
			System.out.println(e.getValue()+"  :  "+e.getKey()+", hashcode :"+e.getValue().hashCode());
		});
		
		

	}

}
