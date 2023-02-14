package edu.miu.waa_final_project.service;

import edu.miu.waa_final_project.dto.request.LoginRequest;
import edu.miu.waa_final_project.dto.request.RefreshTokenRequest;
import edu.miu.waa_final_project.dto.response.LoginResponse;

public interface AuthService {
    LoginResponse login(LoginRequest loginRequest);
    LoginResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
