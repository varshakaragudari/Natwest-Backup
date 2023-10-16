package com.Natwest;

public class Employee {
	private int id;  
	private String name;  
	private String city;  
	  
	public int getId() {  
	    return id;  
	}  
	public void setId(int id) {  
		System.out.println("Set ID ");
	    this.id = id;  
	}  
	public String getName() {  
	    return name;  
	}  
	public Employee() {
		super();
	}
	public Employee(int id, String name, String city) {
		super();
		System.out.println("Constructor");
		this.id = id;
		this.name = name;
		this.city = city;
	}
	public void setName(String name) {  
		System.out.println("Set name ");
	    this.name = name;  
	}  
	  
	public String getCity() {  
	    return city;  
	}  
	public void setCity(String city) {  
	    this.city = city;  
	}  
	void display(){  
	    System.out.println(id+" "+name+" "+city);  
	}
	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", city=" + city + "]";
	}  
}