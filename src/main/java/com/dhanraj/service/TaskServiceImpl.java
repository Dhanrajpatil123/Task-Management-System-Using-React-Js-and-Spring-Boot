package com.dhanraj.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.dhanraj.dto.TaskDTO;
import com.dhanraj.model.Task;
import com.dhanraj.repository.TaskRepository;


@Service
public class TaskServiceImpl implements TaskService{
	
	
	private TaskRepository taskRepository;
	

	public TaskServiceImpl(TaskRepository taskRepository) {
		super();
		this.taskRepository = taskRepository;
	}
	
	

	@Override
	public Task createTask(TaskDTO taskDTO) {
		
		Task task = new Task();
        task.setTitle(taskDTO.getTitle());
        task.setDescription(taskDTO.getDescription());
        task.setStatus(taskDTO.getStatus());
        task.setDueDate(taskDTO.getDueDate());
        
        return taskRepository.save(task);
	
	}

	
	
	@Override
	public List<Task> getAllTasks() {
		
		return taskRepository.findAll();
	}

	@Override
	public Task updateTask(Long id, TaskDTO taskDTO) {

		return taskRepository.findById(id).map(task -> {
            task.setTitle(taskDTO.getTitle());
            task.setDescription(taskDTO.getDescription());
            task.setStatus(taskDTO.getStatus());
            task.setDueDate(taskDTO.getDueDate());
            return taskRepository.save(task);
        }).orElseThrow(() -> new RuntimeException("Task not found"));

	}

	@Override
	public void deleteTask(Long id) {

		 taskRepository.deleteById(id);
		
	}

}
