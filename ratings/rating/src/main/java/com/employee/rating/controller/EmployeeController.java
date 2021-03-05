package com.employee.rating.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee.rating.dao.EmployeeDao;
import com.employee.rating.model.Employee;

@RestController
public class EmployeeController {
	
	@Autowired
	EmployeeDao employeeDao;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/employees/{id}")
	public List<Employee> getEmployee(@PathVariable Long id){
		return employeeDao.findAllSubordinates(id) ;
	}
	
	
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/employeesByName/{firstName}")
	public Employee getUser(@PathVariable String firstName){
		return employeeDao.findByFirstname(firstName);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/updateEmployees/{id}")
	public Employee getEmployee(@PathVariable Long id, @RequestBody Employee employee) {
		Employee empById = employeeDao.getOne(id);
		empById.setJava(employee.getJava());
		empById.setJavascript(employee.getJavascript());
		empById.setPython(employee.getPython());
		return employeeDao.saveAndFlush(empById);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/updateComments/{id}")
	public Employee getEmployeeComments(@PathVariable Long id, @RequestBody Employee employee) {
		Employee empById = employeeDao.getOne(id);
		empById.setComments(employee.getComments());
		return employeeDao.saveAndFlush(empById);
	}

}
