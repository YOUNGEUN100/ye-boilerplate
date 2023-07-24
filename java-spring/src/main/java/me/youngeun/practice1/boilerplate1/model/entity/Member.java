//package me.youngeun.practice1.boilerplate1.model.entity;
//
//import jakarta.persistence.*;
//import lombok.AccessLevel;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Getter
//@Setter
//@NoArgsConstructor(access = AccessLevel.PROTECTED)
//@Entity
//public class Member {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id")
//    private Long id;
//
//    @Column(name = "email", nullable = false, unique = true)
//    private String email;
//
//    @Column(name = "password")
//    private String password;
//}
