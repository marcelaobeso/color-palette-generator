// src/components/Shared/Modal.tsx

import { Fragment, type ReactElement, type ReactNode } from "react";

import { Dialog, Transition, TransitionChild } from "@headlessui/react";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

/**
 * Reusable Modal component.
 *
 * @param {boolean} props.isOpen - Whether the modal is open.
 * @param {function} props.onClose - Function to close the modal.
 * @param {ReactNode} props.children - Modal content.
 * @returns {ReactElement} The rendered component.
 */
const Modal = ({ isOpen, onClose, children }: ModalProps): ReactElement => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="bg-opacity-50 min-h-screen bg-black px-4 text-center">
          {/* Centering trick */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          {/* Modal content */}
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="my-8 inline-block w-full max-w-5xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
              {children}
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
