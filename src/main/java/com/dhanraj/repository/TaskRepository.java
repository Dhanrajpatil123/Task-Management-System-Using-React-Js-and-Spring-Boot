package com.dhanraj.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dhanraj.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long>{
	

}
