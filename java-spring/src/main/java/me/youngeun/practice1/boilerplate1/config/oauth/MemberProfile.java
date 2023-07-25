package me.youngeun.practice1.boilerplate1.config.oauth;


import lombok.Getter;
import lombok.Setter;
import me.youngeun.practice1.boilerplate1.model.dto.JwtTokenDto;
import me.youngeun.practice1.boilerplate1.model.enums.Authority;
import me.youngeun.practice1.boilerplate1.model.Member;

@Getter
@Setter
public class MemberProfile {
    //    private String name;
    private String email;
    private String provider;
    private String nickname;
//    private String accessToken;

//    public Member toMember() {
//        return Member.builder()
////                .name(name)
//                .email(email)
//                .provider(provider)
////                .accessToken(accessToken)
//                .build();
//    }
//
//    public Member toMemberWithJwt(JwtTokenDto jwtTokenDto) {
//        return Member.builder()
////                .name(name)
//                .email(email)
//                .provider(provider)
//                .accessToken(jwtTokenDto.getAccessToken())
//                .build();
//    }

    public Member toMember() {
        return Member.builder()
//                .name(name)
                .email(email)
                .provider(provider)
                .nickname(nickname)
                .authority(Authority.ROLE_USER)
                .build();
    }

    public Member toMember(JwtTokenDto jwtTokenDto) {
        return Member.builder()
//                .name(name)
                .email(email)
                .provider(provider)
                .nickname(nickname)
                .accessToken(jwtTokenDto.getAccessToken())
                .accessTokenExpireIn(jwtTokenDto.getTokenExpiresIn())
                .authority(Authority.ROLE_USER)
                .build();
    }
}