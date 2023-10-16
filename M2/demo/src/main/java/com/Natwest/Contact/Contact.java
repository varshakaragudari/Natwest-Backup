package com.Natwest.Contact;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Contact {
	
	private int contactId;
	private String email;
	private String phoneno;
	private int userId;

}
