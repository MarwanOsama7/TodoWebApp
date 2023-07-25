package com.global.todo.service;

import java.time.LocalDate;
import java.util.List;


import org.springframework.stereotype.Service;

import com.global.todo.entity.todo;
import com.global.todo.repository.TodoRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TodoService {

	private final TodoRepo repo;
	
	public todo findbyid(Long id) {
		return repo.findById(id).orElse(null);
	}
	
	public List<todo> findall() {
		return repo.findAll();
	}

	public todo insert(todo entity) {
		entity.setDate(LocalDate.now());
		return repo.save(entity);
	}
	
	public todo update(Long id ,todo entity) {
		entity.setId(id);
		entity.setDate(LocalDate.now());
		return repo.save(entity);
	}
	
	public void	 deletebyid(Long id ) {
		repo.deleteById(id);
	}
	
	public List<todo>  finduser(Long id) {
		return repo.finduser(id);
	}
}
