package com.global.todo.dto;

import java.time.LocalDate;

import com.global.todo.entity.user;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class TodoDto {

	private Long id;
	private String tasks;
	private LocalDate date; 
	private boolean isDone;
	private user user;
}
