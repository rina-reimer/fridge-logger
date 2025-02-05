import {intializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import firebaseConfig from '@/config';

const auth = getAuth();
const app = intializeApp(firebaseConfig);
const db = getFirestore(app);

async function getItems(db) {
  const userCol = collection(db, "users");
  const currUser = userCol.document(auth.currentUser);
  const itemsCol = collection(currUser, "items");
  const itemsSnapshot = await getDocs(itemsCol);
  const itemsList = itemsSnapshot.docs.map(doc => doc.data());
  return itemsList;
}

export default function Gallery() {
  const items = getItems(db);

  return (
    <div className="grid grid-col">
      { 
        for (let i in itemsList ) {
          return(<div>i</div>);
        }
      }
    </div>
  );
}