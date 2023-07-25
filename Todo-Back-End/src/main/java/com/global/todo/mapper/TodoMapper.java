package com.global.todo.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import com.global.todo.dto.TodoDto;
import com.global.todo.entity.todo;

@Mapper
public interface TodoMapper {

	@Mapping(source = "task" ,target = "tasks")
	TodoDto map(todo todo); 
	
	@Mapping(source = "task" ,target = "tasks")
	List<TodoDto> map(List<todo> todo); 
	
	@Mapping(source = "tasks" ,target = "task")
	todo unmap(TodoDto todo); 
	
	
	@Mapping(source = "tasks" ,target = "task")
	todo unmap(TodoDto todo,@MappingTarget todo to); 
}
