package com.global.todo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.global.todo.dto.TodoDto;
import com.global.todo.entity.todo;
import com.global.todo.mapper.TodoMapper;
import com.global.todo.service.TodoService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/todo")
public class TodoController {

	private final TodoService service;
	private final TodoMapper mapper;

	@GetMapping("/id/{id}")
	public ResponseEntity<TodoDto> findbyid(@PathVariable Long id) {

		todo t = service.findbyid(id);
		TodoDto dto = mapper.map(t);
		return ResponseEntity.ok(dto);
	}

	@GetMapping("/findall")
	public ResponseEntity<List<TodoDto>> findall() {
		List<todo> t = service.findall();
		List<TodoDto> dto = mapper.map(t);
		return ResponseEntity.ok(dto);
	}
	
	@GetMapping("/finduser/{id}")
	public ResponseEntity<List<todo>>  finduser(@PathVariable Long id) {
		return ResponseEntity.ok(service.finduser(id));
	}
	
	@PostMapping
	public ResponseEntity<TodoDto> insert(@RequestBody TodoDto entity) {
		todo t = mapper.unmap(entity);
		todo t1 = service.insert(t);
		TodoDto dto = mapper.map(t1);
		return ResponseEntity.ok(dto);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable Long id, @RequestBody todo entity) {
		return ResponseEntity.ok(service.update(id, entity));
	}

	@DeleteMapping("/delete/{id}")
	public void deletebyid(@PathVariable Long id) {
		service.deletebyid(id);
	}
	
}
