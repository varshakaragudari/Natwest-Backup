package com.javatpoint;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
public class Test {

	public static void main(String[] args) {
		ApplicationContext ctx=new ClassPathXmlApplicationContext("applicationContext2.xml");
		
		EmployeeDao dao=(EmployeeDao)ctx.getBean("edao");
		Employee e=new Employee(1,"geeta",3000);
		int status1=dao.saveEmployee(e);
		System.out.println("No of records updates are "+status1);
		
		int status2=dao.updateEmployee(new Employee(102,"Sonoo",15000));
		System.out.println("No of records updates are "+status2);
	
		
		/*Employee e=new Employee();
		e.setId(102);
		int status=dao.deleteEmployee(e);
		System.out.println(status);*/
		
		List<Employee> x = dao.getAllEmployees();
		System.out.println(x);
		
		System.out.println("-----------------------------");
		 List<Employee> y=dao.findAllEmployees();
		 System.out.println(y);
		
	}

}
