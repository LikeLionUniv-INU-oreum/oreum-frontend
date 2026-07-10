import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './OnboardingSelectDept.styles';
import ProgressBar from '../components/common/ProgressBar';
import Emoji from '../assets/images/Emoji.png';
import OnboardingBackground from '../assets/images/OnboardingBackground.png';

// 임시 데이터 목록 (실제 API 혹은 프로젝트 내의 데이터셋으로 대체 가능)
const departments = [
  { id: 1, name: '정지인보통신공학과', group: '정보대학' },
  { id: 2, name: '정지인외교학과', group: '글로벌정경대학' },
  { id: 3, name: '행정지인학과', group: '글로벌정경대학' },
  { id: 4, name: '정치외교학과', group: '사회과학대학' },
];

const jobs = [
  { id: 1, name: '해외영업' },
  { id: 2, name: '직무2' },
  { id: 3, name: '직무3' },
  { id: 4, name: '직무4' },
  { id: 5, name: '직무5' },
  { id: 6, name: '직무6' },
];

export default function OnboardingSelectDept() {
  const navigate = useNavigate();

  const [deptInput, setDeptInput] = useState('');
  const [jobInput, setJobInput] = useState('');

  const [showDeptDropdown, setShowDeptDropdown] = useState(false);
  const [showJobDropdown, setShowJobDropdown] = useState(false);

  // 돋보기 클릭 시: 텍스트가 있을 때만 회색 드롭다운 활성화
  const handleDeptSearch = () => {
    if (deptInput.trim()) setShowDeptDropdown(true);
  };

  const handleJobSearch = () => {
    if (jobInput.trim()) setShowJobDropdown(true);
  };

  // 다음 단계 이동 (학과와 직무가 모두 채워져야 버튼 활성화)
  const isFormValid = deptInput.trim() !== '' && jobInput.trim() !== '';

  const handleNext = () => {
    if (isFormValid) {
      console.log('저장된 값:', { department: deptInput, job: jobInput });
      navigate('/onboardingcomplete');
    }
  };

  return (
    <S.Container>
      <S.Header>
        <ProgressBar currentStep={2} totalSteps={3} emojiSrc={Emoji} />
      </S.Header>

      <S.ContentArea>
        <S.Title>소속 학과와 관심 직무를<br />선택해주세요.</S.Title>

        {/* 소속 학과 섹션 */}
        <S.InputWrapper>
          <S.Label>소속 학과(부)<S.Required>*</S.Required></S.Label>
          <S.SubLabel>주전공 한 가지를 선택해주세요.</S.SubLabel>
          <S.SearchBox>
            <S.Input
              type="text"
              placeholder="학과를 입력하세요"
              value={deptInput}
              onChange={(e) => {
                setDeptInput(e.target.value);
                if (!e.target.value) setShowDeptDropdown(false);
              }}
            />
            <S.SearchButton type="button" onClick={handleDeptSearch}>🔍</S.SearchButton>
          </S.SearchBox>

          {/* 학과 드롭다운: 3줄 최대 고정 스크롤 */}
          {showDeptDropdown && (
            <S.Dropdown $maxRows={3}>
              {departments
                .filter(item => item.name.includes(deptInput))
                .map(item => (
                  <S.DropdownItem
                    key={item.id}
                    onClick={() => {
                      setDeptInput(item.name);
                      setShowDeptDropdown(false);
                    }}
                  >
                    <S.ItemName>{item.name}</S.ItemName>
                    <S.ItemGroup>[{item.group}]</S.ItemGroup>
                  </S.DropdownItem>
                ))}
            </S.Dropdown>
          )}
        </S.InputWrapper>

        {/* 관심 직무 섹션 */}
        <S.InputWrapper>
          <S.Label>관심 직무<S.Required>*</S.Required></S.Label>
          <S.SubLabel>같은 직무를 선택한 학우들끼리 진행 상황을 비교해볼 수 있어요.</S.SubLabel>
          <S.SearchBox>
            <S.Input
              type="text"
              placeholder="직무를 입력하세요"
              value={jobInput}
              onChange={(e) => {
                setJobInput(e.target.value);
                if (!e.target.value) setShowJobDropdown(false);
              }}
            />
            <S.SearchButton type="button" onClick={handleJobSearch}>🔍</S.SearchButton>
          </S.SearchBox>

          {/* 관심 직무 드롭다운: 5줄 최대 고정 스크롤 */}
          {showJobDropdown && (
            <S.Dropdown $maxRows={5}>
              {jobs
                .filter(item => item.name.includes(jobInput))
                .map(item => (
                  <S.DropdownItem
                    key={item.id}
                    onClick={() => {
                      setJobInput(item.name);
                      setShowJobDropdown(false);
                    }}
                  >
                    <S.ItemName>{item.name}</S.ItemName>
                    <S.ItemGroup>[직무]</S.ItemGroup>
                  </S.DropdownItem>
                ))}
            </S.Dropdown>
          )}
        </S.InputWrapper>
      </S.ContentArea>

      <S.FooterBgSection>
        <S.BgImage src={OnboardingBackground} alt="배경 일러스트" />
        <S.NextButton
          type="button"
          disabled={!isFormValid}
          onClick={handleNext}
        >
          선택 완료
        </S.NextButton>
      </S.FooterBgSection>
    </S.Container >
  );
}