package com.Natwest;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	 ApplicationContext ctx2 = new AnnotationConfigApplicationContext(Person2.class);
         Person2 p2=(Person2) ctx2.getBean(Person2.class);
         p2.show();
    	
        ApplicationContext c=new ClassPathXmlApplicationContext("applicationContext.xml");    
        Employee e=(Employee)c.getBean("emp1");
        System.out.println(e);
        
        Employee e1=(Employee)c.getBean("emp2");
        System.out.println(e1);
        
        Person p=(Person) c.getBean(Person.class);
        p.show();
        p.x=12;
        System.out.println(p.x);
        
        
       
    }
}
