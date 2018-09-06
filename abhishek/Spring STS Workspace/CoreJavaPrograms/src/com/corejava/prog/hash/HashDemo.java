package com.corejava.prog.hash;

import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.TreeMap;
import java.util.WeakHashMap;
import java.util.concurrent.ConcurrentHashMap;

public class HashDemo {

	public static void main(String[] args) {

		//Map<Bean, String> h=new HashMap<Bean, String>();
		
		Map<Bean, String> h=new WeakHashMap<Bean, String>();
			h.put(new Bean("ABC",23), "ABC");
			h.put(new Bean("XYZ",23), "XYZ");
			h.put(new Bean("ABC",23), "ABC");
			Bean b=new Bean("HUG", 65);
			h.put(b, "ty");
			h.put(b, "dds");
			
			System.gc();// Only strong ref will persist e.g., Bean b=new Bean("HUG", 65); not weak ref e.g,h.put(new Bean("ABC",23), "ABC"); 
			
			h.entrySet().stream().forEach(e->{
				System.out.println(e.getValue()+"  :  "+e.getKey()+", hashcode :"+e.getValue().hashCode());
			});
			
//		Map<String, String> unsorted=new HashMap<String, String>();
//			Map<String, String> unsorted=new LinkedHashMap<String, String>();// to maintain Natural order
			Map<String, String> unsorted=new ConcurrentHashMap<String, String>();
			unsorted.put("animal", "animal");
			unsorted.put("pineapple", "pineapple");
			unsorted.put("apple", "apple");
			unsorted.put("guava", "guava");
			unsorted.put("orange", "orange");
			
//			Map syncMap=Collections.synchronizedMap(unsorted);
			
			System.out.println("Unsorted Map");
			unsorted.entrySet().stream().forEach(e->{
				System.out.println(e.getValue()+"  :  "+e.getKey()+", hashcode :"+e.getValue().hashCode());
				unsorted.put("test", "test");//ConcurrentModificationException occur normally
			});
		
		Map<String, String> sortedMap=new TreeMap<String, String>((o1,o2)->o2.compareTo(o1));
			sortedMap.putAll(unsorted);
			System.out.println("Sorted Map");
			sortedMap.entrySet().stream().forEach(e->{
				System.out.println(e.getValue()+"  :  "+e.getKey()+", hashcode :"+e.getValue().hashCode());
			});
	}

}
