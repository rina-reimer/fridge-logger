import { useState } from 'react';
import Image from "next/image";

import { getAuth } from 'firebase/auth';
import {Logo} from "./components/Logo";
import {Login} from "./components/Login";

import {Item} from "./components/Item";
import {EditItem} from "./components/EditItem";
import {Gallery} from "./components/Gallery";

import {Footer} from "./components/Footer";

const auth = getAuth();

export default function Home() {
  const { selectedItem, selectItem } = useState(null);
  const { editStatus, setEditStatus } = useState(false);

  return (
    <div className="grid h-dvh font-text text-purple">
      <main className="grid md:grid-cols-2 h-[90dvh]">
        {/* left side */}
        <div className="grid place-content-center bg-pink">
          {
            if (!auth.currentUser) {
              return(<Logo />);
            } else if (selectedItem) {
              if (editStatus) {
                return(<EditItem id={selectedItem} />);
              } else {
                return(<Item id={selectedItem} />);
              }
            }
          } 
        </div>
        {/* right side */}
        <div className="grid place-content-center">
          {
            if (!auth.currentUser) {
              return(<Login />);
            } else {
              return(<Gallery />);
            }
          }
        </div>
      </main>
      {/* end main content */}
      <Footer />
    </div>
  );
}
