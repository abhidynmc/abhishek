package com.corejava.exception;

public class FoundInfinityException extends RuntimeException {
	public FoundInfinityException(String msg, Throwable th) {
		super(msg,th);
	}

}
