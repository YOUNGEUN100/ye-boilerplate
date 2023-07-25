package me.youngeun.practice1.boilerplate1.jpa;

//import me.youngeun.practice1.boilerplate1.model.entity.Member;
import me.youngeun.practice1.boilerplate1.model.Member;
import me.youngeun.practice1.boilerplate1.repository.jpa.MemberRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

@SpringBootTest
public class JpaTest {

    @Autowired
    private MemberRepository memberRepository;

    @DisplayName("테스트")
    @Test
    void jpatest1() {
        Member member = memberRepository.findById(2L).get();
        assertThat(member.getEmail()).isEqualTo("test22@test.com");
    }
    @DisplayName("테스트2")
    @Test
    void jpatest2() {
        List<Member> memberList = memberRepository.findAll();
        assertThat(memberList.size()).isEqualTo(3);
    }

}
