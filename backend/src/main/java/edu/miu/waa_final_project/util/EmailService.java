package edu.miu.waa_final_project.util;

public interface EmailService {
    public boolean sendEmail (String to, String subject, String message);
}
