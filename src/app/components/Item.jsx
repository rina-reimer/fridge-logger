import {getAuth} from 'firebase/auth';
import {initializeApp} from 'firebase/app';


export default function Item(id) {

  return (
    <div>
      {id}
    </div>
  );
  
}