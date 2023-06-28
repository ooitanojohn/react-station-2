"use client";
import { Delete, DoneFill, CloseFill } from "@/components/Icon";
import { Thread } from "@/src/interfaces";
import styles from "@/src/styles/deleteConfirm.module.css";
import { useState } from "react";

interface Props {
  thread: Thread;
  deleteBookmark: (thread: Thread) => void;
}

export default function DeleteConfirmModal(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const deleteComponents = (
    props: Props,
    thread: Thread,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    props.deleteBookmark(thread);
    setIsOpen(false);
  };

  return (
    <>
      <button className={styles.modalBtn} onClick={openModal}>
        <Delete className={styles.icon} />
      </button>
      {isOpen && (
        <>
          <p>本当に{props.thread.title}を削除してもよろしいですか？</p>
          <Delete className={styles.icon} />
          <button
            className={styles.modalBtn}
            onClick={(e) => deleteComponents(props, props.thread, e)}
          >
            <DoneFill className={styles.icon} />
            はい
          </button>
          <button className={styles.modalBtn} onClick={closeModal}>
            <CloseFill className={styles.icon} />
            いいえ
          </button>
        </>
      )}
    </>
  );
}
