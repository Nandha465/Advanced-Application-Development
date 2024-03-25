package com.example.backend.Service;


import com.example.backend.model.EventDetails;
import com.example.backend.repository.EventDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventDetailsService {

    @Autowired
    private EventDetailsRepository eventDetailsRepository;

    public List<EventDetails> getAllEvents() {
        return eventDetailsRepository.findAll();
    }

    public EventDetails getEventById(Long id) {
        Optional<EventDetails> eventOptional = eventDetailsRepository.findById(id);
        return eventOptional.orElse(null);
    }

    public EventDetails createEvent(EventDetails eventDetails) {
        return eventDetailsRepository.save(eventDetails);
    }

    public EventDetails updateEvent(Long id, EventDetails eventDetails) {
        if (eventDetailsRepository.existsById(id)) {
            eventDetails.setId(id);
            return eventDetailsRepository.save(eventDetails);
        }
        return null;
    }

    public void deleteEvent(Long id) {
        eventDetailsRepository.deleteById(id);
    }
}
