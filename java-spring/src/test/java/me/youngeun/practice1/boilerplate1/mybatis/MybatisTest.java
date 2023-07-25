package me.youngeun.practice1.boilerplate1.mybatis;

import me.youngeun.practice1.boilerplate1.model.Member;
import me.youngeun.practice1.boilerplate1.repository.mapper.MemberMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class MybatisTest {
    @Autowired
    private MemberMapper memberMapper;

  /*  @DisplayName("mybatis 사용 가능 여부 테스트")
    @Test
    void mybatisTest1() {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("id", 2L);

        Optional<Member> member = memberMapper.selectMember((HashMap<String, Object>) paramMap);
//        System.out.println("member 2 email: " + member.getEmail());
//        assertThat(member.getEmail()).isEqualTo("test22@test.com");

        List<Member> memberList = memberMapper.selectMemberList();
        assertThat(memberList.size()).isEqualTo(3);
    }
*/
    @DisplayName("mybatis 사용 가능 여부 테스트")
    @Test
    void mybatisTest2() {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("id", 2L);

        Optional<Member> optMember = memberMapper.selectMember((HashMap<String, Object>) paramMap);
        assertThat(optMember.isEmpty()).isFalse();

    }
}
