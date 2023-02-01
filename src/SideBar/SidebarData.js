import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faRightFromBracket, faPhoneFlip, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';


export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FontAwesomeIcon icon={faHouseChimney} />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <FontAwesomeIcon icon={faUser} />,
  },

  {
    title: "New Report",
    path: "/newreport",
    icon: <FontAwesomeIcon icon={faPlus} />,
  },

  {
    title: "Reports",
    path: "/home",
    icon: <FontAwesomeIcon icon={faFlag} />,
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: <FontAwesomeIcon icon={faPhoneFlip} />,
  },

  {
    title: "Logout",
    path: "/register",
    icon: <FontAwesomeIcon icon={faRightFromBracket} />,
  },
]









