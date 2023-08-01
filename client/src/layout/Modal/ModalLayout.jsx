import styles from './ModalLayout.module.scss'

const Modal = ({active, setActive, children, height}) => {
  return ( 
    <div className={active ? [styles.modal, styles.modal__active].join(' ') : styles.modal} onClick={() =>setActive(false)}>
      <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
        <div className={styles.modal__close} onClick={() =>setActive(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M17.2882 2.77338C16.9627 2.44794 16.4351 2.44794 16.1097 2.77338L10.031 8.85204L3.95237 2.77338C3.62694 2.44794 3.0993 2.44794 2.77387 2.77338C2.44842 3.09881 2.44842 3.62645 2.77387 3.95189L8.8525 10.0305L2.77388 16.1091C2.44844 16.4346 2.44844 16.9622 2.77388 17.2877C3.09932 17.6131 3.62696 17.6131 3.95239 17.2877L10.031 11.209L16.1097 17.2877C16.4351 17.6131 16.9627 17.6131 17.2882 17.2877C17.6136 16.9622 17.6136 16.4346 17.2882 16.1092L11.2095 10.0305L17.2882 3.95189C17.6136 3.62645 17.6136 3.09881 17.2882 2.77338Z" fill="#0F0F0F"/>
          </svg>
        </div>
        {children}
      </div>
    </div>
   );
}
 
export default Modal;