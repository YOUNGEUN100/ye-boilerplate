package me.youngeun.practice1.boilerplate1.config.jwt;

import me.youngeun.practice1.boilerplate1.model.dto.JwtTokenDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.TimeZone;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class JwtTokenProviderTest {
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @DisplayName("jwt 토큰 생성 테스트")
    @Test
    void jwtGenerateTest1() {
        JwtTokenDto jwtTokenDto = jwtTokenProvider.generateTokenDto("1");
        System.out.println("grant type : " + jwtTokenDto.getGrantType());
        System.out.println("access token : " + jwtTokenDto.getAccessToken());

        // unixtimestamp을 읽기 쉬운 시간으로 변경
        LocalDateTime localDateTime = LocalDateTime.ofInstant(Instant.ofEpochMilli(jwtTokenDto.getTokenExpiresIn()),
                                        TimeZone.getDefault().toZoneId());
        System.out.println("access token expiry time : " + localDateTime);
    }

}