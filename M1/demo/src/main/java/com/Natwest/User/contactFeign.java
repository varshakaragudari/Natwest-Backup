package com.Natwest.User;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient("CONTACT-SERVICE")
public interface contactFeign {

	@GetMapping("/hello")
	String hello();
}
