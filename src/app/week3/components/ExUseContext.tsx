import { createContext, useContext, useState } from "react";

//useContext 사용 방식: props 전달할 필요 없이 컴포넌트 트리를 따라 데이터를 전달
type Theme = "light" | "dark" | "system";
const ThemeContext = createContext<Theme>("system");

const useTheme = () => useContext(ThemeContext);
export default function ExUseContext() {
  const [theme, setTheme] = useState<Theme>("light");

  //ThemeContext.Provider가 theme을 상위 컴포넌트(ExUseContext)에서 하위 컴포넌트에게 전달
  return (
    <ThemeContext.Provider value={theme}>
      <MyComponent />
      {/*props 사용 방식: <MyComponent theme={theme} />*/}
    </ThemeContext.Provider>
  );
}

function MyComponent() {
  const theme = useTheme();
  return (
    <div>
      <p>
        <b>useContext Hook</b>
      </p>
      <p>Current theme: {theme}</p>
    </div>
  );
}

/* props 사용 방식 비교
function MyComponent(props: { theme: Theme }) {
  return (
    <div>
      <p>Current theme: {props.theme}</p>
    </div>
  );
}
*/
