import React, { useState } from "react";
import NewStudent from "../../../components/admin/NewStudent";
import AllStudent from "../../../components/admin/StudentList/AllStudent";
import Sixieme from "../../../components/admin/StudentList/Sixieme";
import Cinquieme from "../../../components/admin/StudentList/Cinquieme";
import Quatrieme from "../../../components/admin/StudentList/Quatrieme";
import Troisieme from "../../../components/admin/StudentList/Troisieme";
import Seconde from "../../../components/admin/StudentList/Seconde";
import PremiereES from "../../../components/admin/StudentList/PremiereES";
import PremiereSPE from "../../../components/admin/StudentList/PremiereSPE";
import TES from "../../../components/admin/StudentList/TES";
import TSPE from "../../../components/admin/StudentList/TSPE";

const ListStudent = () => {
  const [showNewStudent, setshowNewStudent] = useState(false);

  const [AllStudentModal, setAllStudentModal] = useState(true);
  const [sixieme, setSixieme] = useState(false);
  const [cinquieme, setcinquieme] = useState(false);
  const [quatrieme, setquatrieme] = useState(false);
  const [troisieme, settroisieme] = useState(false);
  const [seconde, setseconde] = useState(false);
  const [premierees, setpremierees] = useState(false);
  const [premierespe, setpremierespe] = useState(false);
  const [tes, settes] = useState(false);
  const [tspe, settspe] = useState(false);

  const handleModals = (e) => {
    switch (e.target.id) {
      case "AllStudent":
        setAllStudentModal(true);
        setSixieme(false);
        setcinquieme(false);
        setquatrieme(false);
        settroisieme(false);
        setseconde(false);
        setpremierees(false);
        setpremierespe(false);
        settes(false);
        settspe(false);
        break;
      case "sixieme":
        setAllStudentModal(false);
        setSixieme(true);
        setcinquieme(false);
        setquatrieme(false);
        settroisieme(false);
        setseconde(false);
        setpremierees(false);
        setpremierespe(false);
        settes(false);
        settspe(false);
        break;
      case "cinquieme":
        setAllStudentModal(false);
        setSixieme(false);
        setcinquieme(true);
        setquatrieme(false);
        settroisieme(false);
        setseconde(false);
        setpremierees(false);
        setpremierespe(false);
        settes(false);
        settspe(false);
        break;
      case "quatrieme":
        setAllStudentModal(false);
        setSixieme(false);
        setcinquieme(false);
        setquatrieme(true);
        settroisieme(false);
        setseconde(false);
        setpremierees(false);
        setpremierespe(false);
        settes(false);
        settspe(false);
        break;
      case "troisieme":
        setAllStudentModal(false);
        setSixieme(false);
        setcinquieme(false);
        setquatrieme(false);
        settroisieme(true);
        setseconde(false);
        setpremierees(false);
        setpremierespe(false);
        settes(false);
        settspe(false);
        break;
      case "seconde":
        setAllStudentModal(false);
        setSixieme(false);
        setcinquieme(false);
        setquatrieme(false);
        settroisieme(false);
        setseconde(true);
        setpremierees(false);
        setpremierespe(false);
        settes(false);
        settspe(false);
        break;
      case "premierees":
        setAllStudentModal(false);
        setSixieme(false);
        setcinquieme(false);
        setquatrieme(false);
        settroisieme(false);
        setseconde(false);
        setpremierees(true);
        setpremierespe(false);
        settes(false);
        settspe(false);
        break;
      case "premierespe":
        setAllStudentModal(false);
        setSixieme(false);
        setcinquieme(false);
        setquatrieme(false);
        settroisieme(false);
        setseconde(false);
        setpremierees(false);
        setpremierespe(true);
        settes(false);
        settspe(false);
        break;
      case "tes":
        setAllStudentModal(false);
        setSixieme(false);
        setcinquieme(false);
        setquatrieme(false);
        settroisieme(false);
        setseconde(false);
        setpremierees(false);
        setpremierespe(false);
        settes(true);
        settspe(false);
        break;
      case "tspe":
        setAllStudentModal(false);
        setSixieme(false);
        setcinquieme(false);
        setquatrieme(false);
        settroisieme(false);
        setseconde(false);
        setpremierees(false);
        setpremierespe(false);
        settes(false);
        settspe(true);
        break;
      default:
        console.log("err switch");
    }
  };

  return (
    <div className="ListStudent_container">
      <div onClick={() => setshowNewStudent(!showNewStudent)}>New student?</div>
      {showNewStudent && <NewStudent />}
      <div className="arrayStudent">
        <ul>
          <li
            onClick={handleModals}
            id="AllStudent"
            className={AllStudentModal ? "active-btn" : null}
          >
            AllStudent?
          </li>
          <li
            onClick={handleModals}
            id="sixieme"
            className={sixieme ? "active-btn" : null}
          >
            Sixieme?
          </li>
          <li
            onClick={handleModals}
            id="cinquieme"
            className={cinquieme ? "active-btn" : null}
          >
            cinquieme?
          </li>
          <li
            onClick={handleModals}
            id="quatrieme"
            className={quatrieme ? "active-btn" : null}
          >
            quatrieme?
          </li>
          <li
            onClick={handleModals}
            id="troisieme"
            className={troisieme ? "active-btn" : null}
          >
            troisieme?
          </li>
          <li
            onClick={handleModals}
            id="seconde"
            className={seconde ? "active-btn" : null}
          >
            seconde?
          </li>
          <li
            onClick={handleModals}
            id="premierees"
            className={premierees ? "active-btn" : null}
          >
            premierees?
          </li>
          <li
            onClick={handleModals}
            id="premierespe"
            className={premierespe ? "active-btn" : null}
          >
            premierespe?
          </li>{" "}
          <li
            onClick={handleModals}
            id="tes"
            className={tes ? "active-btn" : null}
          >
            tes?
          </li>{" "}
          <li
            onClick={handleModals}
            id="tspe"
            className={tspe ? "active-btn" : null}
          >
            tspe?
          </li>
        </ul>
        {AllStudentModal && <AllStudent />}
        {sixieme && <Sixieme />}
        {cinquieme && <Cinquieme />}
        {quatrieme && <Quatrieme />}
        {troisieme && <Troisieme />}
        {seconde && <Seconde />}
        {premierees && <PremiereES />}
        {premierespe && <PremiereSPE />}
        {tes && <TES />}
        {tspe && <TSPE />}
      </div>
    </div>
  );
};

export default ListStudent;
