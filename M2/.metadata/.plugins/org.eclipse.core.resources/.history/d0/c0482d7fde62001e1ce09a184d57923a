package com.example.demo;

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

	@PostMapping("/send")
	public void sendMessage(@RequestBody Book bk)
	{
			b.setBookId(bk.getBookId());
			b.setBookName(bk.getBookName());
			kafkatemplate.send("test-topic",b);
	}
	
}
