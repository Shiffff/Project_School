import React from "react";
import { NavLink } from "react-router-dom";

const HearderAllRight = () => {
  return (
    <div className="HearderAllRight">
      <nav>
        <ul>
          <div className="firstPart">
            <li className="LinkRight">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "activeLinkRight" : "LinkRightOne"
                }
              >
                Actualité
              </NavLink>
            </li>
            <li className="LinkRight">
              <NavLink
                to="/presentation"
                className={({ isActive }) =>
                  isActive ? "activeLinkRight" : "LinkRightOne"
                }
              >
                Présentation
              </NavLink>
            </li>
            <li className="LinkRight">
              <NavLink
                to="/social"
                className={({ isActive }) =>
                  isActive ? "activeLinkRight" : "LinkRightOne"
                }
              >
                Les Réseaux Sociaux
              </NavLink>
            </li>
          </div>
          <div className="secondPart">
            <li className="LinkRight">
              <NavLink
                to="/boite-outils"
                className={({ isActive }) =>
                  isActive ? "activeLinkRight" : "LinkRightOne"
                }
              >
                La boite à Outils
              </NavLink>
            </li>
            <li className="LinkRight">
              <NavLink
                to="/direction-brevet"
                className={({ isActive }) =>
                  isActive ? "activeLinkRight" : "LinkRightOne"
                }
              >
                Direction Le brevet
              </NavLink>
            </li>
            <li className="LinkRight">
              <NavLink
                to="/direction-bac"
                className={({ isActive }) =>
                  isActive ? "activeLinkRight" : "LinkRightOne"
                }
              >
                Direction le BAC
              </NavLink>
            </li>
            <li className="LinkRight">
              <NavLink
                to="/orientation"
                className={({ isActive }) =>
                  isActive ? "activeLinkRight" : "LinkRightOne"
                }
              >
                Orientation
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default HearderAllRight;
