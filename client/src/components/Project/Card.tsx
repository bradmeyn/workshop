import { MouseEvent, useEffect, useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus } from '@fortawesome/pro-regular-svg-icons';
import { faPencil } from '@fortawesome/pro-light-svg-icons';

const Card = ({ id, summary }: { id: number; summary?: string }) => {
  const [modalActive, setModalActive] = useState(false);
  const modal = useRef(null);
  const searchInput = useRef(null);

  const openModal = (e: MouseEvent) => {
    e.stopPropagation();
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  useOutsideClick(modal, () => {
    if (modalActive) {
      setModalActive(false);
    }
  });

  if (modalActive) {
    return (
      <>
        <div className='fixed p-0 top-0 left-0 h-full w-full z-50 backdrop-blur-sm  bg-slate-900/30  '>
          <div
            ref={modal}
            className='	 bg-slate-700 md:max-w-md md:mx-auto m-20 p-5 rounded'
          >
            <div className='flex justify-between items-center'>
              <div className='text-center w-full text-slate-200 text-xl'>
                New Project
              </div>
              <button className='text-slate-400 hover:text-slate-100'>
                <FontAwesomeIcon icon={faXmark} className='text-3xl' />
              </button>
            </div>
            <div className='form-control text-start mb-3'>
              <label className='text-slate-200 mb-1'>Title</label>
              <input
                autoFocus
                ref={searchInput}
                placeholder='Project Title'
                className='px-3 py-2 bg-slate-600 outline-0 font-normal rounded'
                //   onChange={handleChange}
                //   onFocus={handleFocus}
              />
            </div>
            <button className='p-3 w-full bg-sky-600 hover:bg-sky-600/80 text-slate-100 rounded font-bold'>
              Create
            </button>
          </div>
        </div>
        <li key={id} className='mb-2'>
          <button className='text-slate-100 w-full text-start p-3 bg-slate-500 rounded shadow-sm hover:bg-sky-700 '>
            {summary}
          </button>
        </li>
      </>
    );
  }

  return (
    <li key={id} className='mb-2'>
      <button
        className='text-slate-100 w-full text-start p-4 bg-slate-700 rounded shadow-sm hover:bg-sky-700 flex justify-between items-center'
        onClick={openModal}
      >
        <span>{summary}</span> <FontAwesomeIcon icon={faPencil} className='' />
      </button>
    </li>
  );
};

export default Card;
