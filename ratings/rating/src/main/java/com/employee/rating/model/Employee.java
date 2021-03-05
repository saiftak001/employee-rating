package com.employee.rating.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "emp")
public class Employee {

	public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public Employee getMgr() {
		return mgr;
	}

	public void setMgr(Employee mgr) {
		this.mgr = mgr;
	}

	public String getJavascript() {
		return javascript;
	}

	public void setJavascript(String javascript) {
		this.javascript = javascript;
	}

	public String getJava() {
		return java;
	}

	public void setJava(String java) {
		this.java = java;
	}

	public String getPython() {
		return python;
	}

	public void setPython(String python) {
		this.python = python;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	@Id
	@Column(name = "empno")
	private Long employeeId;

	@Column(name = "pwd")
	private String password;
	
	@Column(name = "type")
	private String type;
	
	@Column(name = "ename")
	private String firstname;

	@ManyToOne(cascade = { CascadeType.ALL })
	@JoinColumn(name = "mgr")
	private Employee mgr;

	@Column(name = "javascript")
	private String javascript;

	@Column(name = "java")
	private String java;

	@Column(name = "python")
	private String python;
	
	@Column(name = "comments")
	private String comments;

	
	@OneToMany(mappedBy = "mgr")
	private Set<Employee> subordinates = new HashSet<Employee>();

	public Employee() {
	}

	public Employee(String firstname) {
		this.firstname = firstname;
	}
	
	
}
