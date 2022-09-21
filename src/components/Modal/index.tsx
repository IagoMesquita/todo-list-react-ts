import style from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

function Modal({ children }: Props) {
  const closeModal = (e: React.MouseEvent) => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
  };

  return (
    <div id="modal" className="hide">
      <div className={style.fade} onClick={closeModal}></div>
      <div className={style.modal}>
        <h2>Texto modal</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
