package com.corejava.prog.hash;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;

public class ConcurrentHMap {

	static Map<String, AtomicLong> orders=new ConcurrentHashMap<>();
	
	static void processOrders() {
		for(String city: orders.keySet()) {
			for(int i=0;i<50;i++) {
				orders.get(city).incrementAndGet();
			}
		}
	}
	public static void main(String[] args) throws InterruptedException {

		orders.put("Mumbai", new AtomicLong());
		orders.put("Delhi", new AtomicLong());
		orders.put("Gugaon", new AtomicLong());
		orders.put("Bangalore", new AtomicLong());
		orders.put("Chennai", new AtomicLong());
		orders.put("Madurai", new AtomicLong());
		
		ExecutorService service=Executors.newFixedThreadPool(2);
		service.submit(ConcurrentHMap::processOrders);
		service.submit(ConcurrentHMap::processOrders);
		
		service.awaitTermination(1, TimeUnit.SECONDS);
		service.shutdown();
		
		System.out.println(orders);
		
	}
	
	
	

	
	

}
