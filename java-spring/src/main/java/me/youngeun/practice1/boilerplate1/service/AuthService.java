package me.youngeun.practice1.boilerplate1.service;

import lombok.RequiredArgsConstructor;
import me.youngeun.practice1.boilerplate1.config.jwt.JwtTokenProvider;
import me.youngeun.practice1.boilerplate1.model.Member;
import me.youngeun.practice1.boilerplate1.model.dto.JwtTokenDto;
import me.youngeun.practice1.boilerplate1.model.dto.MemberRequestDto;
import me.youngeun.practice1.boilerplate1.model.dto.MemberResponseDto;
import me.youngeun.practice1.boilerplate1.repository.jpa.MemberRepository;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManagerBuilder managerBuilder;

    public MemberResponseDto signup(MemberRequestDto requestDto) {

        if(memberRepository.existsByEmail(requestDto.getEmail())) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다");
        }
        Member member = requestDto.toMember(passwordEncoder);
        member = memberRepository.save(member);
        return MemberResponseDto.of(member);
    }

    public JwtTokenDto login(MemberRequestDto requestDto) {
//        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken
//                = requestDto.toAuthentication();
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken
                = new UsernamePasswordAuthenticationToken(requestDto.getEmail(), requestDto.getPassword());
        // 계정정보를 비교하기 전 시큐리티 사용자 정보(principal)를 세팅(loadUserByUsername 메소드 호출)하고
        // 그 이후 UsernamePasswordAuthenticationToken을 사용하여 이메일과 패스워드가 같은지 비교
        Authentication authentication = managerBuilder.getObject().authenticate(usernamePasswordAuthenticationToken);
        JwtTokenDto jwtTokenDto = jwtTokenProvider.generateTokenDto(authentication);

        Member member = memberRepository.findByEmail(requestDto.getEmail()).get();
        member.setAccessToken(jwtTokenDto.getAccessToken());
        member.setAccessTokenExpireIn(jwtTokenDto.getTokenExpiresIn());
        memberRepository.save(member);

        return jwtTokenDto;
    }




}
