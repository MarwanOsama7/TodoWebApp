package com.global.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.global.todo.entity.todo;

public interface TodoRepo extends JpaRepository<todo, Long>{
	
	@Query(value = "SELECT t FROM todo t where user.id = :id")
	List<todo> finduser(Long id);
}
