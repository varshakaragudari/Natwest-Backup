package com.Natwest.User;

import java.util.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
	
	
	private int userId;
	private String name;
	List<Contact> contacts=new ArrayList<>();
	
	public User(int userId, String name) {
		super();
		this.userId = userId;
		this.name = name;
	}
 
	
}
