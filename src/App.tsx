import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { DARK_THEME, LIGHT_THEME, Themes } from "./constants";
import { Wrapper } from "./styles";
import { GeneratorBlock } from "./ui/generatorBlock/GeneratorBlock";

function App() {
  const [theme, setTheme] = useState<Themes>(Themes.light);

  const toggleTheme = () => {
    if (theme === Themes.dark) {
      return setTheme(Themes.light);
    }

    setTheme(Themes.dark);
  };

  return (
    <ThemeProvider theme={theme === Themes.light ? LIGHT_THEME : DARK_THEME}>
      <Wrapper>
        <GeneratorBlock toggleTheme={toggleTheme} theme={theme} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
