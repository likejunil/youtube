import {Outlet} from "react-router-dom";
import SearchHeader from "./Components/SearchHeader/SearchHeader";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <SearchHeader/>
            <QueryClientProvider client={queryClient}>
                <Outlet/>
            </QueryClientProvider>
        </>);
}

export default App;
