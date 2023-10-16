package com.Natwest.Contact;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactController {

	@Autowired
	ContactService us;
	@GetMapping("/Contacts")
	public List<Contact> getContacts()
	{
		return us.getContacts();
		
	}	
	@GetMapping("/Contacts/{id}")
	public List<Contact> getContact(@PathVariable int id)
	{
		return us.getContact(id);
		
	}	
	@GetMapping("/User/Contacts/{userid}")
	public List<Contact> getUserContact(@PathVariable int userid)
	{
		return us.getUserContact(userid);
		
	}
	
	@GetMapping("/hello")
	
	public String hello()
	{
		return "Contact service says hi ";
	}
}
