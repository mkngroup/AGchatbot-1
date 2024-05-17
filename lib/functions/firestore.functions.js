import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase.config";

export const getUserChatsFirestore = async (uid, setState) => {
  const ref = collection(db, `users/${uid}/chats`);
  const q = query(ref, orderBy("createdAt", "desc"));

  try {
    const get = onSnapshot(q, (snap) => {
      const data = snap.docs.map((doc) => ({
        ...doc.data(),
        docId: doc.id,
      }));

      setState(data);
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserMessageFirestore = async (uid, chatid) => {
  const ref = collection(db, `users/${uid}/chats/${chatid}/messages`);
  const q = query(ref, orderBy("createdAt", "asc"));
  try {
    const get = await getDocs(q);
    const data = get.docs.map((item) => ({
      ...item.data(),
      docId: item.id,
    }));
    return { status: "success", data: data };
  } catch (error) {}
};

export const addNewChatFirestore = async (uid, data) => {
  const ref = collection(db, `users/${uid}/chats`);
  try {
    const add = await addDoc(ref, data);
    if (add.id !== undefined) {
      return { status: "success", id: add.id };
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const addNewMessageFirestore = async (uid, chatid, data) => {
  const ref = collection(db, `users/${uid}/chats/${chatid}/messages`);
  try {
    const add = await addDoc(ref, data);
    if (add.id !== undefined) {
      return { status: "success", id: add.id };
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const removeChatFirestore = async (uid, chatid) => {
  const ref = doc(db, `users/${uid}/chats/${chatid}`);
  try {
    await deleteDoc(ref);
    return { status: "success" };
  } catch (error) {
    console.log(error);
  }
};

export const updateChatTitleFirestore = async (uid, chatid, title) => {
  const ref = doc(db, `users/${uid}/chats/${chatid}`);
  try {
    await updateDoc(ref, { chatname: title });
  } catch (error) {
    console.log(error);
  }
};
