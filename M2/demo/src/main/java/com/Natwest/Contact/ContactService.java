package com.Natwest.Contact;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

@Service
public class ContactService {
	
List<Contact> Contactlist=List.of(
			
			new Contact(1,"seeta@gmail.com","111",101),
			new Contact(2,"Geeta@gmail.com","222",102),
			new Contact(3,"Neeta@gmail.com","333",103),
			new Contact(4,"seeta2@gmail.com","1111",101),
			new Contact(5,"Geeta2@gmail.com","2222",102),
			new Contact(6,"Neeta2@gmail.com","3333",103)
			);
	
	public List<Contact> getContacts()
	{
		return Contactlist;
	}

	public  List<Contact> getContact(int id) {
		// TODO Auto-generated method stub
		List<Contact> u= Contactlist.
				stream().
				filter(x->x.getContactId()==id).collect(Collectors.toList());
		return u;
		
	}

	public List<Contact> getUserContact(int userid) {
		// TODO Auto-generated method stub
		return Contactlist
				.stream()
				.filter(x->x.getUserId()==userid).collect(Collectors.toList());
	}
	

}
