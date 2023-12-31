package me.youngeun.practice1.boilerplate1.repository.jpa;

//import me.youngeun.practice1.boilerplate1.model.entity.Member;
import me.youngeun.practice1.boilerplate1.model.Member;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.jpa.repository.JpaRepository;

//import java.util.HashMap;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);

    boolean existsByEmail(String email);
    Optional<Member> findByEmailAndProvider(String email, String provider);
}
