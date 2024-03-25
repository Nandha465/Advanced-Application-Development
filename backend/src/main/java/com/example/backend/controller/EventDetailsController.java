package com.example.backend.controller;



import com.example.backend.Service.EventDetailsService;
import com.example.backend.model.EventDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/event-details")
public class EventDetailsController {

    @Autowired
    private EventDetailsService eventDetailsService;

    @GetMapping
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public List<EventDetails> getAllEvents() {
        return eventDetailsService.getAllEvents();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public EventDetails getEventById(@PathVariable Long id) {
        return eventDetailsService.getEventById(id);
    }

    @PostMapping
    public EventDetails createEvent(@RequestBody EventDetails eventDetails) {
        return eventDetailsService.createEvent(eventDetails);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('USER')")
    public EventDetails updateEvent(@PathVariable Long id, @RequestBody EventDetails eventDetails) {
        return eventDetailsService.updateEvent(id, eventDetails);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void deleteEvent(@PathVariable Long id) {
        eventDetailsService.deleteEvent(id);
    }
}
