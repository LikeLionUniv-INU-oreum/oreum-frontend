import { useState, useEffect } from 'react';
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
import { getMypage } from '../api/mypage';

const ACADEMIC_STATUS_MAP = {
  FRESHMAN: '1학년',
  SOPHOMORE: '2학년',
  JUNIOR: '3학년',
  SENIOR: '4학년',
  EXTRA_SEMESTER: '초과학기',
  GRADUATE: '졸업생',
};

const CATEGORY_IMAGES = {
  1: Mypage2, // 교내
  2: Mypage3, // 대외활동
  3: Mypage4, // 인턴
  4: Mypage5, // 자격증
};

const DEFAULT_STATS = [
  { categoryId: 1, categoryName: '교내', myCount: 1, jobAverageCount: 9, completedCourses: [] },
  { categoryId: 2, categoryName: '대외활동', myCount: 1, jobAverageCount: 9, completedCourses: [] },
  { categoryId: 3, categoryName: '인턴', myCount: 1, jobAverageCount: 9, completedCourses: [] },
  { categoryId: 4, categoryName: '자격증', myCount: 1, jobAverageCount: 9, completedCourses: [] },
];

const MAX_COUNT = 5; // 그래프 기준값

export default function Mypage() {
  const [openCategory, setOpenCategory] = useState(null); // 각 카테고리별 아코디언 상태
  const [isCourseOpen, setIsCourseOpen] = useState(false); // 완등을 기다리는 코스 아코디언 상태
  const [mypageInfo, setMypageInfo] = useState(null);

  // 통계 항목 클릭 핸들러
  const handleCategoryClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  /** 마이페이지 전체 조회 api */
  useEffect(() => {
    const fetchMypage = async () => {
      try {
        const data = await getMypage();
        if (data.isSuccess) setMypageInfo(data.result);
      } catch (error) {
        console.error('마이페이지 정보 로딩 실패:', error);
      }
    };

    fetchMypage();
  }, []);

  const apiStats = mypageInfo?.categoryStats || [];

  // 통계 리스트 가공
  const formattedStats = DEFAULT_STATS.map((defaultStat) => {
    const foundData = apiStats.find((stat) => stat.categoryId === defaultStat.categoryId);

    // 찾은 데이터가 있으면 그걸 쓰고, 없으면 더미데이터
    const targetData = foundData || defaultStat;

    return {
      id: defaultStat.categoryId,
      title: defaultStat.categoryName,
      img: CATEGORY_IMAGES[defaultStat.categoryId],
      count: `${targetData.myCount}개`,
      avg: `${targetData.jobAverageCount}개`,
      percent: Math.min((targetData.myCount / MAX_COUNT) * 100, 100),
      avgPercent: Math.min((targetData.jobAverageCount / MAX_COUNT) * 100, 100),
      details: targetData.completedCourses || [],
    };
  });

  // 대기 중인 코스 가공
  const formattedWaitingCourses = mypageInfo?.waitingCourses || [];

  /** 마이페이지 전체 조회 api */
  useEffect(() => {
    const fetchMypage = async () => {
      try {
        const data = await getMypage();
        if (data.isSuccess) setMypageInfo(data.result);
      } catch (error) {
        console.error('마이페이지 정보 로딩 실패:', error);
      }
    };

    fetchMypage();
  }, []);

  return (
    <S.Container bgImage={MypageBackground}>
      <S.ContentArea>
        {/* 상단 상시 노출 영역 */}
        <S.ProfileCard>
          <S.ProfileHeader>
            <S.AvatarWrapper>
              <S.Avatar src={Profile} />
              <S.AddButton onClick={() => alert('준비 중입니다 ⛰️')}>+</S.AddButton>
            </S.AvatarWrapper>
            <S.ProfileInfo>
              <S.UserName>{mypageInfo?.user.nickname || '닉네임'}</S.UserName>
              <S.UserMajor>
                {mypageInfo?.user.majorName || '학과'} /{' '}
                {ACADEMIC_STATUS_MAP[mypageInfo?.user.academicStatus] || '학년'}
              </S.UserMajor>
              <S.UserStats>지금까지 {mypageInfo?.mountainSummary.currentAltitude ?? 9999}m 등반 성공!</S.UserStats>
            </S.ProfileInfo>
          </S.ProfileHeader>

          <S.BadgeSection>
            <S.BadgeItem>
              <S.BadgeTitle>수집한 깃발</S.BadgeTitle>
              <S.BadgeCount>
                <span className="icon">🚩</span> {mypageInfo?.mountainSummary.collectedFlagCount ?? 999}개
              </S.BadgeCount>
            </S.BadgeItem>
            <S.VerticalDivider />
            <S.BadgeItem>
              <S.BadgeTitle>등반 완료한 산맥</S.BadgeTitle>
              <S.BadgeCount>
                <span className="icon">🏔️</span> {mypageInfo?.mountainSummary.completedMountainCount ?? 999}곳
              </S.BadgeCount>
            </S.BadgeItem>
          </S.BadgeSection>
        </S.ProfileCard>

        {/* 메인 통계 영역 */}
        <S.MainContentCard>
          <S.MainTitle>
            [{mypageInfo?.jobProgress.jobName || '직무명'} 희망]{' '}
            {ACADEMIC_STATUS_MAP[mypageInfo?.user.academicStatus] || '학년'}
          </S.MainTitle>

          <S.RankBanner>
            <S.RankLeftSection>
              <S.BannerIcon src={Mypage1} alt="랭킹 아이콘" />
              <S.RankLabel>
                <div className="title">[{mypageInfo?.jobProgress.jobName || '직무명'}]</div>
                <div className="percent">상위 {mypageInfo?.jobProgress.jobRankPercent ?? '99'}%</div>
              </S.RankLabel>
            </S.RankLeftSection>
            <S.RankText>{mypageInfo?.jobProgress.message || '꾸준한 등반으로 더 높이 올라가고 있어요!'}</S.RankText>
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
            {formattedStats.map((item) => {
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
                      <S.ProgressBar color="#999999" width={item.avgPercent} label={item.avg} />
                    </S.GraphContainer>

                    <S.CountBox>
                      <span className="count">{item.count}</span>
                      <S.ArrowIcon isOpen={isOpen}>〉</S.ArrowIcon>
                    </S.CountBox>
                  </S.StatRow>

                  {/* 상세 펼침 내용 */}
                  {isOpen && (
                    <S.DropdownContent>
                      {item.details.length === 0 ? (
                        <S.DropdownItem style={{ justifyContent: 'center', color: '#999999' }}>
                          아직 완료한 코스가 없어요.
                        </S.DropdownItem>
                      ) : (
                        item.details.map((detail, idx) => (
                          <S.DropdownItem key={idx}>
                            <span className="flag">🚩</span> {detail}
                          </S.DropdownItem>
                        ))
                      )}
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
              {formattedWaitingCourses.length === 0 ? (
                <S.CourseDropdownItem style={{ justifyContent: 'center', color: '#999999' }}>
                  아직 대기 중인 코스가 없어요.
                </S.CourseDropdownItem>
              ) : (
                formattedWaitingCourses.map((course) => (
                  <S.CourseDropdownItem key={course.todoId}>
                    <S.ListIcon src={BlackFlag} alt="코스 아이콘" />
                    {course.courseName}
                  </S.CourseDropdownItem>
                ))
              )}
            </S.CourseDropdownList>
          )}
        </S.CourseCard>
      </S.ContentArea>

      <BottomNav />
    </S.Container>
  );
}
