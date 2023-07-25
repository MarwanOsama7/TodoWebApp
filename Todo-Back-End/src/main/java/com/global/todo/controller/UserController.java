package com.global.todo.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.global.todo.entity.user;
import com.global.todo.repository.UserRepo;
import com.global.todo.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

	private final UserService service;

	

	@PostMapping
	public ResponseEntity<user> insert(@RequestBody user entity) {
		return ResponseEntity.ok(service.insert(entity));
	}

	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody Map<String, String> loginData) {
		String username = loginData.get("username");
		String password = loginData.get("password");

		if (service.login(username, password)) {
			return ResponseEntity.ok("Login successful!");
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
		}
	}
	
	@GetMapping("/{name}")
	public ResponseEntity<Long>  findid(@PathVariable String name) {
		return ResponseEntity.ok( service.findid(name));
	}
	
}
