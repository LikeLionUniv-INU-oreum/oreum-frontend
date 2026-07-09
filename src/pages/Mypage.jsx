import React, { useState } from 'react';
import * as S from './Mypage.styles';
import BottomNav from '../components/common/BottomNav';
import BlackFlag from '../assets/images/BlackFlag.png';
import MypageBackground from '../assets/images/MypageBackground.png';
import Profile from '../assets/images/Profile.png';
import Mypage1 from '../assets/images/Mypage1.png';
import Mypage2 from '../assets/images/Mypage2.png';
import Mypage3 from '../assets/images/Mypage3.png';
import Mypage4 from '../assets/images/Mypage4.png';
import Mypage5 from '../assets/images/Mypage5.png';

export default function Mypage() {
  // 각 카테고리별 아코디언 상태 관리 (개별 관리를 위해 객체나 단일 상태로 운영)
  const [openCategory, setOpenCategory] = useState(null);
  // 완등을 기다리는 코스 아코디언 상태 관리
  const [isCourseOpen, setIsCourseOpen] = useState(false);

  // 통계 항목 클릭 핸들러
  const handleCategoryClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  // 임시 더미 데이터 (나중에 백엔드 API 데이터로 대체 가능)
  const mockStats = [
    { id: 'activity', title: '교내 활동', img: Mypage2, count: '3개', avg: '1.8개', percent: 80, avgPercent: 60, details: ['데이터 분석 프로젝트 완성', '데이터 분석 프로젝트 완성', '데이터 분석 프로젝트 완성'] },
    { id: 'contest', title: '공모전/대회', img: Mypage3, count: '2개', avg: '1.3개', percent: 70, avgPercent: 50, details: ['공모전 상세 내용 1', '공모전 상세 내용 2'] },
    { id: 'intern', title: '인턴/프로젝트', img: Mypage4, count: '0개', avg: '0.6개', percent: 10, avgPercent: 30, details: ['인턴십 상세 내용 1'] },
    { id: 'certificate', title: '자격증', img: Mypage5, count: '2개', avg: '0.4개', percent: 65, avgPercent: 20, details: ['정보처리기사 자격증 취득', 'SQLD 자격증 취득'] },
  ];

  const mockWaitingCourses = [
    '정보처리기사 자격증 취득',
    '데이터 분석 프로젝트 완성',
    'AI 해커톤 참가하기',
    '여름 인턴십 지원',
    '정보처리기사 자격증 취득',
    'SQLD 자격증 취득',
    '빅데이터분석기사 자격증 취득',
    'ADsP 자격증 취득'
  ];

  return (
    <S.Container bgImage={MypageBackground}>
      {/* 상단 상시 노출 영역 */}
      <S.ProfileCard>
        <S.ProfileHeader>
          <S.AvatarWrapper>
            <S.Avatar src={Profile} />
            <S.AddButton>+</S.AddButton>
          </S.AvatarWrapper>
          <S.ProfileInfo>
            <S.UserName>김유니</S.UserName>
            <S.UserMajor>무역학부 / 2학년</S.UserMajor>
            <S.UserStats>지금까지 2550M 등반 성공!</S.UserStats>
          </S.ProfileInfo>
        </S.ProfileHeader>

        <S.BadgeSection>
          <S.BadgeItem>
            <S.BadgeTitle>수집한 깃발</S.BadgeTitle>
            <S.BadgeCount><span className="icon">🚩</span> 9개</S.BadgeCount>
          </S.BadgeItem>
          <S.VerticalDivider />
          <S.BadgeItem>
            <S.BadgeTitle>등반 완료한 산맥</S.BadgeTitle>
            <S.BadgeCount><span className="icon">🏔️</span> 3곳</S.BadgeCount>
          </S.BadgeItem>
        </S.BadgeSection>
      </S.ProfileCard>

      {/* 메인 통계 영역 */}
      <S.MainContentCard>
        <S.MainTitle>[해외영업 희망] 2학년</S.MainTitle>

        <S.RankBanner>
          <S.RankLeftSection>
            <S.BannerIcon src={Mypage1} alt="랭킹 아이콘" />
            <S.RankLabel>
              <div className="title">[해외영업] 상위</div>
              <div className="percent">28%</div>
            </S.RankLabel>
          </S.RankLeftSection>
          <S.RankText>꾸준한 등반으로 더 높이 올라가고 있어요!</S.RankText>
        </S.RankBanner>

        <S.StatHeader>
          <S.StatTitle>나의 학년 직무 비교 통계</S.StatTitle>
          <S.StatLegend>
            <span>● 내 기록</span>
            <span>● 직무 평균</span>
          </S.StatLegend>
        </S.StatHeader>

        {/* 통계 리스트 & 아코디언 */}
        <S.StatList>
          {mockStats.map((item) => {
            const isOpen = openCategory === item.id;
            return (
              <S.StatItemWrapper key={item.id}>
                <S.StatRow onClick={() => handleCategoryClick(item.id)}>
                  <S.StatNameBox>
                    <S.StatIcon src={item.img} alt={item.title} />
                    <span className="title">{item.title}</span>
                  </S.StatNameBox>

                  <S.GraphContainer>
                    <S.ProgressBar color="#3B7D5A" width={item.percent} />
                    <S.ProgressBar color="#999999" width={item.avgPercent} label={`${item.avg}`} />
                  </S.GraphContainer>

                  <S.CountBox>
                    <span className="count">{item.count}</span>
                    <S.ArrowIcon isOpen={isOpen}>〉</S.ArrowIcon>
                  </S.CountBox>
                </S.StatRow>

                {/* 상세 펼침 내용 */}
                {isOpen && (
                  <S.DropdownContent>
                    {item.details.map((detail, idx) => (
                      <S.DropdownItem key={idx}>
                        <span className="flag">🚩</span> {detail}
                      </S.DropdownItem>
                    ))}
                  </S.DropdownContent>
                )}
              </S.StatItemWrapper>
            );
          })}
        </S.StatList>
      </S.MainContentCard>

      {/* 완등을 기다리는 코스 영역 */}
      <S.CourseCard>
        <S.CourseHeader onClick={() => setIsCourseOpen(!isCourseOpen)}>
          <S.CourseTitle>🏢 완등을 기다리는 코스</S.CourseTitle>
          <S.ArrowIcon isOpen={isCourseOpen}>〉</S.ArrowIcon>
        </S.CourseHeader>

        {isCourseOpen && (
          <S.CourseDropdownList>
            {mockWaitingCourses.map((course, idx) => (
              <S.CourseDropdownItem key={idx}>
                <S.ListIcon src={BlackFlag} alt="코스 아이콘" /> {course}
              </S.CourseDropdownItem>
            ))}
          </S.CourseDropdownList>
        )}
      </S.CourseCard>

      {/* 하단 탭바 여백용 박스 (실제 푸터 배치용 여유공간) */}
      <S.FooterSpacing />
      <S.BottomNavWrapper>
        <BottomNav />
      </S.BottomNavWrapper>
    </S.Container>
  );
}