package com.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.Model.User;

public interface UserRepo extends JpaRepository<User, Long> {
    
}