import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Basecamp.styles';
import BottomNav from '../components/common/BottomNav';
import HomeMountain from '../assets/images/HomeMountain.jpg';
import GrayFlag from '../assets/images/GrayFlag.png';
import GreenFlag from '../assets/images/GreenFlag.png';
import Goaddreview from '../assets/images/Goaddreview.png';
import Goeditcourse from '../assets/images/Goeditcourse.png';
import { getBasecampInfo, getTerms } from '../api/user';

const CATEGORIES = ['자격증', '대외활동', '교내', '인턴'];

export default function MainPage() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [basecampData, setBasecampData] = useState(null);

  const [termList, setTermList] = useState([]); // 서버에서 받아온 전체 분기 목록
  const [selectedTerm, setSelectedTerm] = useState(null); // 현재 선택된 분기 객체

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  /** 조회 가능 분기 목록 api */
  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const data = await getTerms();

        if (data.isSuccess) {
          if (data.result.terms.length > 0) {
            setTermList(data.result.terms);
            setSelectedTerm(data.result.terms[0]);
          } else {
            // 최초 유저의 경우
            const today = new Date();
            const currentYear = today.getFullYear();
            const isFirstHalf = today.getMonth() + 1 <= 6;

            const fallbackTerm = {
              year: currentYear,
              termType: isFirstHalf ? 'FIRST_HALF' : 'SECOND_HALF',
              displayName: `${currentYear}년 ${isFirstHalf ? '상반기' : '하반기'}`,
            };

            setTermList([fallbackTerm]);
            setSelectedTerm(fallbackTerm);
          }
        }
      } catch (error) {
        console.error('분기 목록 로딩 실패:', error);
      }
    };

    fetchTerms();
  }, []);

  /** 베이스캠프 분기별 조회 api */
  useEffect(() => {
    const fetchBasecamp = async () => {
      if (!selectedTerm) return;

      try {
        const data = await getBasecampInfo(selectedTerm.year, selectedTerm.termType);

        if (data.isSuccess) setBasecampData(data.result);
      } catch (error) {
        console.error('베이스캠프 데이터 로딩 실패:', error);
      }
    };

    fetchBasecamp();
  }, [selectedTerm]);

  // 드롭다운 항목 클릭 이벤트
  const handlePeriodSelect = (term) => {
    setSelectedTerm(term);
    setIsDropdownOpen(false);
  };

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.TopHeaderSection>
          <S.HeaderTopRow>
            <h2>베이스캠프</h2>

            <S.DropdownContainer>
              <S.DropdownButton onClick={toggleDropdown}>
                {selectedTerm?.displayName || '분기 선택'} <span>{isDropdownOpen ? '▲' : '▼'}</span>
              </S.DropdownButton>

              {isDropdownOpen && (
                <S.DropdownMenu>
                  {termList.map((term, index) => (
                    <div key={index} onClick={() => handlePeriodSelect(term)}>
                      {term.displayName}
                    </div>
                  ))}
                </S.DropdownMenu>
              )}
            </S.DropdownContainer>
          </S.HeaderTopRow>

          <S.TitleDescription>
            <span>[{basecampData?.jobName || ' '}]</span> 산맥 등반 중!
          </S.TitleDescription>
        </S.TopHeaderSection>

        <S.MountainBox>
          <S.HomeInfo>
            <S.InfoText>
              <div>분기별 고도</div>
              <span>{basecampData?.currentHeight ?? 9999}M</span>
            </S.InfoText>
            <S.InfoText style={{ textAlign: 'right' }}>
              <div>[{basecampData?.jobName || ' '}] 산맥</div>
              <span>상위 {basecampData?.jobPositionPercent ?? 99}%</span>
            </S.InfoText>
          </S.HomeInfo>

          <S.MountainContent>
            <S.GaugeContainer>
              {Array.from({ length: 20 }).map((_, index) => (
                <S.GaugeLine key={index} />
              ))}
              <S.Indicator topPercent={basecampData?.jobPositionPercent ?? 99} />
            </S.GaugeContainer>

            <S.HomeMountain src={HomeMountain} />
          </S.MountainContent>
        </S.MountainBox>

        <S.Divider />

        {/* 내 코스 리스트 섹션 */}
        <S.CourseSection>
          <S.SectionHeader>
            <S.TitleArea>
              <h2>내 코스</h2>
              <p style={{ marginBottom: '6px' }}>목표를 관리하고 기록해요.</p>
            </S.TitleArea>
            <S.AddBtn onClick={() => navigate('/addcourse')}>+ 새 할 일 추가</S.AddBtn>
          </S.SectionHeader>

          {CATEGORIES.map((categoryName) => {
            const matchedCategoryData = basecampData?.categories?.find((data) => data.categoryName === categoryName);

            // 백 데이터가 있으면 쓰고, 없으면 빈 배열로 처리
            const todos = matchedCategoryData?.todos || [];

            return (
              <S.CategoryGroup key={categoryName}>
                <S.CategoryTag category={categoryName}>{categoryName}</S.CategoryTag>

                {todos.length === 0 ? (
                  <S.EmptyTaskPlaceholder>등록된 목표가 없어요.</S.EmptyTaskPlaceholder>
                ) : (
                  todos.map((todo) => {
                    const isCompleted = todo.todoStatus === 'COMPLETED';

                    return (
                      <S.TaskCard key={todo.todoId} isCompleted={isCompleted} category={categoryName}>
                        <div className="task-left">
                          <S.StatusFlag src={isCompleted ? GrayFlag : GreenFlag} alt="상태 깃발" />
                          <span
                            style={{
                              textDecoration: isCompleted ? 'line-through' : 'none',
                              color: '#333',
                            }}
                          >
                            {todo.courseName}
                          </span>
                        </div>
                        <div className="task-right">
                          <S.ActionIcon
                            src={Goeditcourse}
                            onClick={() => {
                              navigate('/editcourse', { state: { todoId: todo.todoId } });
                            }}
                          />
                          <S.ActionIcon
                            src={Goaddreview}
                            onClick={() => {
                              if (isCompleted) {
                                alert('이미 리뷰 작성을 완료한 코스입니다.');
                                return;
                              }
                              navigate('/addreview', { state: { todoId: todo.todoId, courseName: todo.courseName } });
                            }}
                          />
                        </div>
                      </S.TaskCard>
                    );
                  })
                )}
              </S.CategoryGroup>
            );
          })}
        </S.CourseSection>

        <S.BottomNavWrapper>
          <BottomNav />
        </S.BottomNavWrapper>
      </S.ContentWrapper>
    </S.Container>
  );
}
