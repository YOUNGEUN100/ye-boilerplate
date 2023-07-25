package me.youngeun.practice1.boilerplate1.service;

import lombok.RequiredArgsConstructor;
import me.youngeun.practice1.boilerplate1.model.Member;
import me.youngeun.practice1.boilerplate1.model.dto.MemberResponseDto;
import me.youngeun.practice1.boilerplate1.repository.jpa.MemberRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberResponseDto getMyInfoBySecurity() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();
        Optional<MemberResponseDto> optionalMember =
        memberRepository.findById(Long.parseLong(id)).map(MemberResponseDto::of);
        if(optionalMember.isEmpty())
            return null;;
        return optionalMember.get();
    }

}
