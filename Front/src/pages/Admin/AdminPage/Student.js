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
      <div className="popupNewStudent">
        <div
          className="popupNewStudentButton"
          onClick={() => setshowNewStudent(!showNewStudent)}
        >
          + Nouvel évève
        </div>
        {showNewStudent && <NewStudent />}
      </div>
      <div className="header">
        <ul>
          <li
            onClick={handleModals}
            id="AllStudent"
            className={
              AllStudentModal
                ? "activeLinkHome isActiveClasstes"
                : "iconeClasstes"
            }
          >
            Tableau
          </li>
          <li
            onClick={handleModals}
            id="sixieme"
            className={
              sixieme ? "activeLinkHome isActiveClass6" : "iconeClass6"
            }
          >
            6ème
          </li>
          <li
            onClick={handleModals}
            id="cinquieme"
            className={
              cinquieme ? "activeLinkHome isActiveClass5" : "iconeClass5"
            }
          >
            5ème
          </li>
          <li
            onClick={handleModals}
            id="quatrieme"
            className={
              quatrieme ? "activeLinkHome isActiveClass4" : "iconeClass4"
            }
          >
            4ème
          </li>
          <li
            onClick={handleModals}
            id="troisieme"
            className={
              troisieme ? "activeLinkHome isActiveClass3" : "iconeClass3"
            }
          >
            3ème
          </li>
          <li
            onClick={handleModals}
            id="seconde"
            className={
              seconde ? "activeLinkHome isActiveClass2" : "iconeClass2"
            }
          >
            2nd
          </li>
          <li
            onClick={handleModals}
            id="premierees"
            className={
              premierees ? "activeLinkHome isActiveClass1es" : "iconeClass1es"
            }
          >
            1ère ES
          </li>
          <li
            onClick={handleModals}
            id="premierespe"
            className={
              premierespe
                ? "activeLinkHome isActiveClass1spe"
                : "iconeClass1spe"
            }
          >
            1ère SPE
          </li>{" "}
          <li
            onClick={handleModals}
            id="tes"
            className={
              tes ? "activeLinkHome isActiveClasstes" : "iconeClasstes"
            }
          >
            Term ES
          </li>{" "}
          <li
            onClick={handleModals}
            id="tspe"
            className={
              tspe ? "activeLinkHome isActiveClasstspe" : "iconeClasstspe"
            }
          >
            Term SPE
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
