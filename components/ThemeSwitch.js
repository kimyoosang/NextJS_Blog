import { useState } from 'react';
import DarkTheme from './DarkTheme';

function loadDarkMode() {
  if (typeof localStorage === 'undefined') {
    return false;
  }
  const value = localStorage.getItem('darkMode');
  return value === null ? false : JSON.parse(value);
}

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(loadDarkMode);

  const handleClick = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  const text = darkMode ? 'Light Mode' : 'Dark Mode';
  return (
    <>
      {/* suppressHydrationWarning을 true로 설정하면, React는 어트리뷰트와 그
      엘리먼트 내용의 불일치에 대해 경고하지 않습니다. 바로 밑 한 단계 깊이를
      기준으로만 작동하며 해결책으로 사용하도록 되어 있습니다. */}
      <button onClick={handleClick} suppressHydrationWarning>
        {text}
      </button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }
      `}</style>
      {darkMode && <DarkTheme />}
    </>
  );
}

export default ThemeSwitch;
