package com.Natwest.User;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class UserController {

	@Autowired
	UserService us;
	
	@Autowired
	RestTemplate resttemplate;
	
	@Autowired
	contactFeign cf;
	
	@GetMapping("/users")
	public List<User> getUsers()
	{
		return us.getUsers();		
	}
	@GetMapping("/users/{id}")
	public User getUser(@PathVariable int id)
	{
		User user=us.getUser(id);
		System.out.println(user);
		List<Contact> c= resttemplate.getForObject("http://user-service/User/Contacts/"+id, List.class);
		user.setContacts(c);
		System.out.println(user);
		return user;
	}
	
	@GetMapping("/getHello")
	public String getHello()
	{
		return cf.hello();
	}
	
}
