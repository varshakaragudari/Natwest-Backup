package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Service
@RestController
public class consumer {
	
	@Autowired
	Book b;

	@KafkaListener(topics={"test-topic"},groupId="gr1")
	
	public void showMessage(Book bk)
	{
		System.out.println("message from producer"+b);
		this.b=bk;
		
	}
	
	@GetMapping("/consume")
	public Book consumedData()
	{
		System.out.println("hi");
		return b;
	}
}
