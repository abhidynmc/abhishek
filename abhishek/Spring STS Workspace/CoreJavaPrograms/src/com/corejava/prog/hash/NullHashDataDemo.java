package com.corejava.prog.hash;

import java.util.HashMap;
import java.util.Map;

public class NullHashDataDemo {

	public static void main(String[] args) {
		Map<String, String> map=new HashMap<String, String>();
		map.put(null, null);
		map.put("null", "null");
		System.out.println("Map Size: "+map.size());
		map.entrySet().stream().forEach(System.out::print);
	}
}
