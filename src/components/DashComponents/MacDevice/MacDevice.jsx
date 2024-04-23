

const MacDevice = () => {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-accent shadow-xl" onClick={() => document.getElementById('my_modal_1').showModal()}>Open Altai C1n</button>
            {/* Modal Dialog */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <iframe className='w-full h-[70vh;]' src="http://192.168.1.222/cgi-bin/luci" width="" height="" frameBorder="0"></iframe>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn" onClick={() => document.getElementById('my_modal_1').close()}>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MacDevice;
