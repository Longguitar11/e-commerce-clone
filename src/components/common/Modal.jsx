import React from 'react'

const Modal = ({ isOpen, title, onClose, children }) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />

            {/* Modal content */}
            <div className="relative z-10 w-full max-w-[530px] rounded-xl bg-white shadow-lg overflow-hidden">
                {/* Header */}
                <div className='flex justify-between items-center py-3 px-5 border-b border-[#eee]'>
                    <button className='size-10 hover:bg-[#E0E0E0] rounded-full' onClick={onClose}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5 15L17.5 20L22.5 25" stroke="currentColor" stroke-width="2"></path>
                        </svg>
                    </button>

                    {title}

                    {/* Close button */}
                    <button
                        className="rounded-full p-2 hover:bg-[#E0E0E0] size-10"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                {children}
            </div>
        </div>
    )
}

export default Modal
