package com.employee.rating.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.employee.rating.model.Employee;

@Repository
public interface EmployeeDao extends JpaRepository<Employee, Long>{

	public Employee findByFirstname(String firstName);
	
	@Query(value="Select * FROM emp e where e.mgr =:id OR e.empno=:id", nativeQuery=true)
	List<Employee> findAllSubordinates(@Param("id") Long id );
	
}


