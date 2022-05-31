import './Razas.css';


function ModalRazas(props) {
    return (
        <div>
            <div className="modal fade" id={props.pm1} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="exampleModalLabel">{props.pm3}</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                
                        {props.pm5}
                        <div className='dts'>
                        <h4>Algunos datos</h4>
                        <h5>Pais de Origen:</h5>
                        {props.pm7}
                        <h5>Vida:</h5>
                        {props.pm8}
                        </div>
                        
                        </div>
                
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalRazas;