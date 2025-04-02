package com.dhanraj.service;

import java.util.List;

import com.dhanraj.dto.TaskDTO;
import com.dhanraj.model.Task;

public interface TaskService {
	
    Task createTask(TaskDTO taskDTO);
    
    List<Task> getAllTasks();
    
    Task updateTask(Long id, TaskDTO taskDTO);
    
    void deleteTask(Long id);
}