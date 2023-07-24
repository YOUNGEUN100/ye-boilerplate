package me.youngeun.practice1.boilerplate1.repository.jpa;

//import me.youngeun.practice1.boilerplate1.model.entity.Member;
import me.youngeun.practice1.boilerplate1.model.mapper.Member;
import org.springframework.data.jpa.repository.JpaRepository;

//import java.util.HashMap;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> selectByEmail(String email);
}
