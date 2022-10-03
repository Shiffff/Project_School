import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Cinquieme from "./Cinquieme";
import Home from "./Home";
import PremiereES from "./PremiereES";
import PremiereSPE from "./PremiereSPE";
import Quatrieme from "./Quatrieme";
import Seconde from "./Seconde";
import Sixieme from "./Sixieme";
import TES from "./TES";
import Troisieme from "./Troisieme";
import TSPE from "./TSPE";
import Error from "../../utils/Error";

const PublicRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sixieme" element={<Sixieme />} />
          <Route path="/cinquieme" element={<Cinquieme />} />
          <Route path="/quatrieme" element={<Quatrieme />} />
          <Route path="/troisieme" element={<Troisieme />} />
          <Route path="/seconde" element={<Seconde />} />
          <Route path="/premiereES" element={<PremiereES />} />
          <Route path="/premiereSPE" element={<PremiereSPE />} />
          <Route path="/tes" element={<TES />} />
          <Route path="/tspe" element={<TSPE />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};

export default PublicRouter;
