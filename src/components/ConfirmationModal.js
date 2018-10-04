import React from 'react'
import Modal from 'react-modal'

const ConfirmModal = (props) => {
  return (

    <Modal
      className='modal'
      ariaHideApp={false}
      isOpen={!!props.confirmation}
      contentLabel='Confirm deletion'
    >
      <h3>Are you sure you want to delete this expense?</h3>
      <div className='modal__button'>
        <button
          className='button button--secondary'
          onClick={props.handleConfirm}
        >Yes</button>
        <button
          className='button'
          onClick={props.handleNotConfirm}
        >No</button>
      </div>
    </Modal>


  )
}

export default ConfirmModal