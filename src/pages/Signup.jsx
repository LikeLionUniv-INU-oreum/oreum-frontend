import React from 'react';
import { useState } from 'react';
import * as S from './Signup.styles';
import Logo from '../assets/images/Logo.png';

export default function Signup() {

  return (
    <S.Container>

      <S.Image src={Logo} />

      <S.Text>대학 웹메일 주소</S.Text>
      <S.Input
        type="email"
        placeholder='@inu.co.kr'
      />
      <S.ErrorMessage>인증번호가 전송되었습니다.</S.ErrorMessage>

      <S.Text>인증번호</S.Text>
      <S.Input
        type="email"
        placeholder='숫자 N자리'
      />
      <S.ErrorMessage>인증번호가 올바르지 않습니다.</S.ErrorMessage>

      <S.Text>비밀번호 등록</S.Text>
      <S.Input
        type="passward"
        placeholder='영문 N자리'
      />
      <S.ErrorMessage>비밀번호 형식이 올바르지 않습니다.</S.ErrorMessage>

      <S.Text>이름? 아님 닉네임?</S.Text>
      <S.Input
        type="email"
        placeholder='어쩌고 N자리'
      />
      <S.ErrorMessage>닉네임 형식이 올바르지 않습니다.</S.ErrorMessage>

      <S.LoginButton>회원가입</S.LoginButton>

    </S.Container>
  );
}