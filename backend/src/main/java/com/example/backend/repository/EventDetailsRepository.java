package com.example.backend.repository;

import com.example.backend.model.EventDetails;
import org.springframework.data.jpa.repository.JpaRepository;



public interface EventDetailsRepository extends JpaRepository<EventDetails, Long> {
}
