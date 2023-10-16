package com.Natwest;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Component
public class Person {
	
	public int x;
	public void show()
	{
		System.out.println("I am a person ");
	}

}
