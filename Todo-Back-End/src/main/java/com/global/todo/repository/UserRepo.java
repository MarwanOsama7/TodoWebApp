package com.global.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.global.todo.entity.user;

public interface UserRepo extends JpaRepository<user, Long>{

	user findByUsername(String username);
	
	@Query(value = "SELECT u.id FROM user u where username = :name")
	Long findid(String name);
}
