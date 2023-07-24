package me.youngeun.practice1.boilerplate1.model.mapper;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import lombok.*;
import org.apache.ibatis.annotations.Mapper;


@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 추가
//@AllArgsConstructor
@Entity // 추가
@Mapper
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
}
