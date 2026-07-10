import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './OnboardingSelectDept.styles';
import ProgressBar from '../components/common/ProgressBar';
import Emoji from '../assets/images/Emoji.png';
import OnboardingBackground from '../assets/images/OnboardingBackground.png';
import { searchMajors, searchJobs } from '../api/user';

export default function OnboardingSelectDept() {
  const navigate = useNavigate();
  const [deptInput, setDeptInput] = useState('');
  const [jobInput, setJobInput] = useState('');
  const [showDeptDropdown, setShowDeptDropdown] = useState(false);
  const [showJobDropdown, setShowJobDropdown] = useState(false);
  const [deptList, setDeptList] = useState([]); // 학과 검색 결과
  const [jobList, setJobList] = useState([]); // 직무 검색 결과

  // 학과 검색 디바운싱
  useEffect(() => {
    if (!deptInput.trim()) {
      setDeptList([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const data = await searchMajors(deptInput);
        if (data.isSuccess) {
          setDeptList(data.result);
          setShowDeptDropdown(true);
        }
      } catch (error) {
        console.error('학과 검색 실패', error);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [deptInput]);

  // 직무 검색 디바운싱
  useEffect(() => {
    if (!jobInput.trim()) {
      setJobList([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const data = await searchJobs(jobInput);
        if (data.isSuccess) {
          setJobList(data.result);
          setShowJobDropdown(true);
        }
      } catch (error) {
        console.error('직무 검색 실패', error);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [jobInput]);

  // 돋보기 클릭 시: 텍스트가 있고 리스트가 있으면 강제 오픈
  const handleDeptSearch = () => {
    if (deptInput.trim()) setShowDeptDropdown(true);
  };

  const handleJobSearch = () => {
    if (jobInput.trim()) setShowJobDropdown(true);
  };

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
        <S.Title>
          소속 학과와 관심 직무를
          <br />
          선택해주세요.
        </S.Title>

        {/* 소속 학과 섹션 */}
        <S.InputWrapper>
          <S.Label>
            소속 학과(부)<S.Required>*</S.Required>
          </S.Label>
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
            <S.SearchButton type="button" onClick={handleDeptSearch}>
              🔍
            </S.SearchButton>
          </S.SearchBox>

          {/* 학과 드롭다운 */}
          {showDeptDropdown && deptList.length > 0 && (
            <S.Dropdown $maxRows={3}>
              {deptList.map((item) => (
                <S.DropdownItem
                  key={item.majorId || item.majorName}
                  onClick={() => {
                    setDeptInput(item.majorName);
                    setShowDeptDropdown(false);
                  }}
                >
                  <S.ItemName>{item.majorName}</S.ItemName>
                  <S.ItemGroup>[{item.colleageName || '단과대'}]</S.ItemGroup>
                </S.DropdownItem>
              ))}
            </S.Dropdown>
          )}
        </S.InputWrapper>

        {/* 관심 직무 섹션 */}
        <S.InputWrapper>
          <S.Label>
            관심 직무<S.Required>*</S.Required>
          </S.Label>
          <S.SubLabel>
            같은 직무를 선택한 학우들끼리 진행 상황을 비교해볼 수 있어요.
          </S.SubLabel>
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
            <S.SearchButton type="button" onClick={handleJobSearch}>
              🔍
            </S.SearchButton>
          </S.SearchBox>

          {/* 관심 직무 드롭다운 */}
          {showJobDropdown && jobList.length > 0 && (
            <S.Dropdown $maxRows={5}>
              {jobList.map((item) => (
                <S.DropdownItem
                  key={item.jobId || item.jobName}
                  onClick={() => {
                    setJobInput(item.jobName);
                    setShowJobDropdown(false);
                  }}
                >
                  <S.ItemName>{item.jobName}</S.ItemName>
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
    </S.Container>
  );
}
