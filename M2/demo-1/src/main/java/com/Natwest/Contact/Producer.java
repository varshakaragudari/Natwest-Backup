package com.Natwest.Contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Producer {
	
	@Autowired
	KafkaTemplate kafkatemplate;
	
	@Autowired
	Book b;

	@PostMapping("/send2")
	public void sendMessage(@RequestBody Book bk)
	{
			kafkatemplate.send("test-topic",bk);
	}
	
	@GetMapping("/send")
	public void  hello(@RequestParam String message) 
	{
		kafkatemplate.send("my-topic",message);
	}
}