package com.example.backend.Service;



import com.example.backend.model.PaymentDetails;
import com.example.backend.repository.PaymentDetailsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentDetailsService {

    @Autowired
    private PaymentDetailsRepository paymentDetailsRepository;

    public List<PaymentDetails> getAllPaymentDetails() {
        return paymentDetailsRepository.findAll();
    }

    public PaymentDetails getPaymentDetailsById(Long id) {
        Optional<PaymentDetails> paymentDetailsOptional = paymentDetailsRepository.findById(id);
        return paymentDetailsOptional.orElse(null);
    }

    public PaymentDetails createPaymentDetails(PaymentDetails paymentDetails) {
        return paymentDetailsRepository.save(paymentDetails);
    }

    public PaymentDetails updatePaymentDetails(Long id, PaymentDetails paymentDetails) {
        paymentDetails.setId(id);
        return paymentDetailsRepository.save(paymentDetails);
    }

    public void deletePaymentDetails(Long id) {
        paymentDetailsRepository.deleteById(id);
    }
}
