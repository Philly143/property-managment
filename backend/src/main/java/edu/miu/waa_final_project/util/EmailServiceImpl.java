package edu.miu.waa_final_project.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
@Service
public class EmailServiceImpl implements EmailService{
    @Autowired(required = true)
    private JavaMailSender sender;

    @Override
    public boolean sendEmail(String to, String subject, String message)  {
        SimpleMailMessage notificationEmail = new SimpleMailMessage();
        notificationEmail.setFrom("dannitecle@gmail.com");
        notificationEmail.setSubject(subject);
        notificationEmail.setText(message);
        notificationEmail.setTo(to);
        sender.send(notificationEmail);
        return true;

    }
}
