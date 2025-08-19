import styled from "styled-components";

import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostWritePage from "./pages/PostWritePage";
import PostViewPage from "./pages/PostViewPage";


const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function MiniBlog(props) {
    return (
        <>
            <MainTitleText>소플의 미니 블로그</MainTitleText>
            <Routes>
                <Route
                    index
                    element={<MainPage />}
                />
                <Route
                    path='post-write'
                    element={<PostWritePage />}
                />
                <Route
                    path='post/:postId'
                    element={<PostViewPage />}
                />
            </Routes>
        </>
    );
}

export default MiniBlog;