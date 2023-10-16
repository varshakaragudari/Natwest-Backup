package com.Natwest.User;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;


@Service
public class UserService {

	List<User> userlist=List.of(
			
			new User(101,"seeta"),
			new User(102,"Geeta"),
			new User(103,"Neeta")
			);
	
	public List<User> getUsers()
	{
		return userlist;
	}

	public  User getUser(int id) {
		// TODO Auto-generated method stub
		User u= userlist.
				stream().
				filter(x->x.getUserId()==id).findFirst().orElse(null);
		return u;
		
	}
}
