package com.example.backend.controller;



import com.example.backend.Service.PaymentDetailsService;
import com.example.backend.model.PaymentDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payment-details")
public class PaymentController {

    @Autowired
    private PaymentDetailsService paymentDetailsService;

    @GetMapping
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public List<PaymentDetails> getAllPaymentDetails() {
        return paymentDetailsService.getAllPaymentDetails();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public PaymentDetails getPaymentDetailsById(@PathVariable Long id) {
        return paymentDetailsService.getPaymentDetailsById(id);
    }

    @PostMapping
    public PaymentDetails createPaymentDetails(@RequestBody PaymentDetails paymentDetails) {
        return paymentDetailsService.createPaymentDetails(paymentDetails);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('USER')")
    public PaymentDetails updatePaymentDetails(@PathVariable Long id, @RequestBody PaymentDetails paymentDetails) {
        return paymentDetailsService.updatePaymentDetails(id, paymentDetails);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void deletePaymentDetails(@PathVariable Long id) {
        paymentDetailsService.deletePaymentDetails(id);
    }
}
