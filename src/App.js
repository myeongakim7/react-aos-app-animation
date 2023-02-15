import logo from "./logo.svg";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function App() {
  // AOS 초기화
  useEffect(() => {
    AOS.init();
  });

  // npm i aos 설치 후 시작
  // aos-init = 초기값
  // aos-animate = 시작

  // 애니메이션 설정한 것들을 class="aos-init aos-animate" 값이 자동으로 생성된다 (개발자도구에서 볼 수 있음)
  return (
    <div className="App">
      <section className="s1">
        <div>
          <h1>Animation on Scroll</h1>
          <p>스크롤 시 애니메이션 효과 주기</p>
        </div>
      </section>
      <section className="s2">
        <div>
          <h1 data-AOS="fade-left">Section 2</h1>
          {/* data-AOS라는 속성 */}
          <p>김명아</p>
        </div>
      </section>
      <section className="s3">
        <div>
          <h1 data-AOS="fade-right">Section 3</h1>
          <img
            className="logo"
            data-AOS
            data-AOS-delay="0"
            data-AOS-duration="3000"
            src={logo}
            alt="logo"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
