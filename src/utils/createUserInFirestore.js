import { doc, setDoc , serverTimestamp} from 'firebase/firestore';
import { firestore } from '../config';
import { getDefaultProfileImage } from './getDefaultProfileImage';

export const createUserInFirestore = async (userId, username, email) => {
  const userRef = doc(firestore, 'users', userId);

  try {
    const profileImageUrl = await getDefaultProfileImage();

    await setDoc(userRef, {
      username: username,
      email: email,
      profileImage: profileImageUrl,
      createdAt: serverTimestamp(),
    });
    console.log('User created successfully!');
  } catch (error) {
    console.error('Error creating user in Firestore:', error.message);
  }
};
