package com.Natwest.Contact;

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

	@KafkaListener(topics={"my-topic"},groupId="gr1")
	public void showMessage(String str)
	{
		System.out.println("message from producer"+str);		
	}
	
	@KafkaListener(topics={"test-topic"},groupId="gr2")
	public void showMessage2(Book b)
	{
		System.out.println("message from producer"+b);		
	}
	
//	@GetMapping("/consume")
//	public Book consumedData()
//	{
//		return b;
//	}
}
