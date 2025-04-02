package com.dhanraj.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dhanraj.dto.TaskDTO;
import com.dhanraj.model.Task;
import com.dhanraj.service.TaskService;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:3000")  // Allow frontend requests
public class TaskController {
	
	
	private TaskService taskService;

	public TaskController(TaskService taskService) {
		super();
		this.taskService = taskService;
	}
	
	
		
	    // POST : 	localhost:8080/tasks
	
	 	@PostMapping
	    public ResponseEntity<Task> createTask(@RequestBody TaskDTO taskDTO) {
	        return ResponseEntity.ok(taskService.createTask(taskDTO));
	    }

	 	
	 	// GET : localhost:8080/tasks
	 	
	    @GetMapping
	    public ResponseEntity<List<Task>> getAllTasks() {
	        return ResponseEntity.ok(taskService.getAllTasks());
	    }
	    
	    
	    
	    // PUT : localhost:8080/tasks/1

	    @PutMapping("/{id}")
	    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody TaskDTO taskDTO) {
	        return ResponseEntity.ok(taskService.updateTask(id, taskDTO));
	    }

	    
	    
	    // DELETE : localhost:8080/tasks/4
	    
	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
	        taskService.deleteTask(id);
	        return ResponseEntity.noContent().build();
	    }

}
