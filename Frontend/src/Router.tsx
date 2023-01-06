import { Route, Routes } from 'react-router-dom';

import { CockApplyPage } from './pages/Cockcipe/CockApplyPage';
import { CockCategoryItemPage } from './pages/Cockcipe/CockCategoryItemPage';
import { CockcipePage } from './pages/Cockcipe/CockcipePage';
import { CockDetailPage } from './pages/Cockcipe/CockDetailPage';
import { CockModifyPage } from './pages/Cockcipe/CockModifyPage';
import { CockflowDetail } from './pages/Cockflow/CockflowDetail';
import { CockflowNewWithLogin } from './pages/Cockflow/CockflowNew';
import { CockflowPage } from './pages/Cockflow/CockflowPage';
import { CockgorithmPage } from './pages/Cockgorithm/CockgorithmPage';
import { FindEmail } from './pages/Finds/FindEmail';
import { FindPassword } from './pages/Finds/FindPassword';
import { Home } from './pages/Home/Home';
import { Join } from './pages/Join/Join';
import { Login } from './pages/Login/Login';
import { Logout } from './pages/Logout/Logout';
import { BartenderApplyWithLogin } from './pages/Mypage/BartenderApply';
import { DetailsWithLogin } from './pages/Mypage/Details';
import { EditAvatarWithLogin } from './pages/Mypage/Edit/EditAvatar';
import { EditPasswordWithLogin } from './pages/Mypage/Edit/EditPassword';
import { MypageWithLogin } from './pages/Mypage/Mypage';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';

export const Router = () => {
  return (
    <Routes>
      // 홈
      <Route path="/" element={<Home />} />
      // 유저
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/find-email" element={<FindEmail />} />
      <Route path="/find-password" element={<FindPassword />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/mypage" element={<MypageWithLogin />} />
      <Route path="/mypage/edit-avatar" element={<EditAvatarWithLogin />} />
      <Route path="/mypage/edit-password" element={<EditPasswordWithLogin />} />
      <Route path="/bartender-apply" element={<BartenderApplyWithLogin />} />
      <Route
        path="/mypage/cockflows"
        element={<DetailsWithLogin title="나의 Cockflow" />}
      />
      <Route
        path="/mypage/likes"
        element={<DetailsWithLogin title="좋아요한 Cockcipe" />}
      />
      <Route
        path="/mypage/cockcipes"
        element={<DetailsWithLogin title="나의 Cockcipe" />}
      />
      <Route
        path="/mypage/comments"
        element={<DetailsWithLogin title="내가 남긴 댓글" />}
      />
      // 칵시피
      <Route path="/cockcipe" element={<CockcipePage />} />
      <Route path="/cockcipe/detail/:id" element={<CockDetailPage />} />
      <Route path="/cockcipe/modify/:id" element={<CockModifyPage />} />
      <Route path="/cockcipe/apply" element={<CockApplyPage />} />
      <Route
        path="/cockcipe/category/:categoryId"
        element={<CockCategoryItemPage />}
      />
      //칵플로우
      <Route path="/cockflow" element={<CockflowPage />} />
      <Route path="/cockflow/new" element={<CockflowNewWithLogin />} />
      <Route path="/cockflow/detail/:cockflowId" element={<CockflowDetail />} />
      //칵고리즘
      <Route path="/cockgorithm" element={<CockgorithmPage />}></Route>
      // NotFound
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};
