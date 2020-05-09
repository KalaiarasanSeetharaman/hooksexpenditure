import React,{useState} from 'react';
import {Modal, Button, Form } from 'react-bootstrap';
import {formatDate} from './../../Utils/Utils';

const IncomeModal = React.memo(({show, handleIncomeClose, addIncomeSpending})=>{
    const [payload, setPayload] = useState({date:formatDate(),type:'income', amount:0,desc:''});
    const [error, setError] = useState('');
    
    const handleBlur=({target})=>{
        setError('');
        setPayload({
            ...payload,
            [target.name]:target.value
        });  
    }

    const handleIncomeSaveClick = (e)=>{
        if(payload.amount>0){
            e.preventDefault();
            addIncomeSpending(payload);
            setPayload({
                ...payload,
                amount:0,
                desc:''
            });
        }
    }

    return(
        <Modal show={show} onHide={()=>handleIncomeClose()}>
            <Modal.Header closeButton>
                <Modal.Title>Add Income</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="formforIncome">
                    <Form.Label>Income</Form.Label>
                    <Form.Control 
                        pattern="^-?[0-9]\d*\.?\d*$"
                        type="text"
                        name="amount"
                        onBlur={(e)=>handleBlur(e)} 
                        placeholder="Enter income" required />
                </Form.Group>
                <Form.Group controlId="formDesc">
                    <Form.Label>Desctription</Form.Label>
                    <Form.Control 
                        type="text"
                        name="desc"
                        onBlur={(e)=>handleBlur(e)}
                        placeholder="Desctription"   required/>
                </Form.Group>
                <Button 
                    variant="primary" 
                    type="submit"  
                    onClick={(e)=>handleIncomeSaveClick(e)}>
                    Submit
                </Button>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    variant="secondary" 
                    onClick={()=>handleIncomeClose()}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
    
})
export default IncomeModal
