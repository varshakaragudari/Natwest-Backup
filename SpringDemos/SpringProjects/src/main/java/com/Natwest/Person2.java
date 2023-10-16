package com.Natwest;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Component
/* @ComponentScan(basePackages = "com.Natwest") */
public class Person2 {
	
	public void show()
	{
		System.out.println("I am a new person 2 ");
	}

}
