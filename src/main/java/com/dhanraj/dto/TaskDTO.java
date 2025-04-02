package com.dhanraj.dto;

import java.time.LocalDate;

import com.dhanraj.model.Task.TaskStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TaskDTO {
	
    private String title;
    private String description;
    private TaskStatus status;
    private LocalDate dueDate;
    
    
	public TaskDTO() {
		super();
		// TODO Auto-generated constructor stub
	}


	public TaskDTO(String title, String description, TaskStatus status, LocalDate dueDate) {
		super();
		this.title = title;
		this.description = description;
		this.status = status;
		this.dueDate = dueDate;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public TaskStatus getStatus() {
		return status;
	}


	public void setStatus(TaskStatus status) {
		this.status = status;
	}


	public LocalDate getDueDate() {
		return dueDate;
	}


	public void setDueDate(LocalDate dueDate) {
		this.dueDate = dueDate;
	}
    
	
	
	
    
    
}