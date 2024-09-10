import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StoreTest from "./StoreTest.tsx";
import { CookiesProvider } from "react-cookie";
import GlobalStyles from "@styles/globalStyles.ts";
import { ThemeProvider } from "styled-components";
import * as Theme from "@styles/theme.ts";
import { createContext } from "react";
import useTheme from "@hooks/useTheme.ts";

const defaultValue = {
  // ThemeContext의 기본 값
  theme: "light",
  onChangeTheme: () => {},
};

export const CustomThemeContext = createContext(defaultValue);

function App() {
  const themeProps = useTheme();

  const queryClient = new QueryClient();

  return (
    <CustomThemeContext.Provider value={themeProps}>
      <ThemeProvider
        theme={
          themeProps.theme === "light" ? Theme.lightTheme : Theme.darkTheme
        }
      >
        <CookiesProvider>
          <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <StoreTest />
          </QueryClientProvider>
        </CookiesProvider>
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

export default App;
