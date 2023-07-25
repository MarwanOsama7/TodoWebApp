package com.global.todo.service;

import java.time.LocalDate;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.global.todo.entity.user;

import com.global.todo.repository.UserRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

	private final UserRepo repo;

	public user insert(user entity) {
		entity.setDate(LocalDate.now());
		return repo.save(entity);
	}

//	public String login(Map<String, String> loginData) {
//		String username = loginData.get("username");
//		String password = loginData.get("password");
//
//		// In a real-world scenario, you should hash the password before storing it and
//		// compare the hashed passwords.
//		user user = repo.findByUsername(username);
//		if (user != null && user.getPassword().equals(password)) {
//			return "Login successful!";
//		} else {
//			return "Invalid credentials";
//		}
//	}

	public boolean login(String username, String password) {
		user user = repo.findByUsername(username);
		return user != null && user.getPassword().equals(password);
	}
	
	public Long findid(String name) {
		return repo.findid(name);
	}
}
