package com.javatpoint;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;

public class EmployeeDao {
private JdbcTemplate jdbcTemplate;

public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
	this.jdbcTemplate = jdbcTemplate;
}

public int saveEmployee(Employee e){
	String query="insert into employee values('"+e.getId()+"','"+e.getName()+"','"+e.getSalary()+"')";
	return jdbcTemplate.update(query);
}
public int updateEmployee(Employee e){
	String query="update employee set name='"+e.getName()+"',salary='"+e.getSalary()+"' where id='"+e.getId()+"' ";
	return jdbcTemplate.update(query);
}
public int deleteEmployee(Employee e){
	String query="delete from employee where id='"+e.getId()+"' ";
	return jdbcTemplate.update(query);
}
public List<Employee> getAllEmployees(){
	 return jdbcTemplate.query("SELECT * FROM employee", new RowMapper<Employee>()
	 {
		 
         public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
             Employee e = new Employee();
             e.setId(rs.getInt(1));
             e.setName(rs.getString(2));
             e.setSalary(rs.getFloat(3));
             return e;
         }
     });
}

public List<Employee> findAllEmployees(){
	 return jdbcTemplate.query("SELECT * FROM employee", new ResultSetExtractor<List<Employee>>()
	 {
		@Override
		public List<Employee> extractData(ResultSet rs) throws SQLException, DataAccessException {
			List<Employee> emplist=new ArrayList<Employee>();
			while(rs.next())
			{
				Employee e=new Employee();
				  	e.setId(rs.getInt(1));
		             e.setName(rs.getString(2));
		             e.setSalary(rs.getFloat(3));
		             emplist.add(e);
			}
			return emplist;
		}
    });
}
}
