import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
	StyledEngineProvider,
	ThemeProvider,
	createTheme,
} from "@mui/material/styles";
import { lime, green, purple } from "@mui/material/colors";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import SignUp from "./SignUp";

const theme = createTheme({
	palette: {
		primary: {
			main: purple[500],
		},
		secondary: {
			main: "#1565c0",
		},
	},
});

const cache = createCache({
	key: "css",
	prepend: true,
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<StyledEngineProvider injectFirst>
				<CacheProvider value={cache}>
					<div className="App">
						<SignUp />
					</div>
				</CacheProvider>
			</StyledEngineProvider>
		</ThemeProvider>
	);
}

export default App;
