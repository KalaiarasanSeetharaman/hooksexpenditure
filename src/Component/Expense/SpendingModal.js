import React,{useState} from 'react';
import {Modal, Button, Form } from 'react-bootstrap';
import {formatDate} from './../../Utils/Utils';

const SpendingModal = React.memo(({show, handleSpendClose, addIncomeSpending})=>{
    const [payload, setPayload] = useState({date:formatDate(),type:'spend', amount:0,desc:''});
    const [error, setError] = useState('');

    const handleBlur=({target})=>{
        setError('');
        setPayload({
            ...payload,
            [target.name]:target.value
        });  
    }

    const handleSpendSaveClick = (e)=>{
        if(payload.amount>0){
            e.preventDefault();
            console.log(payload);
            addIncomeSpending(payload);
            setPayload({
                ...payload,
                amount:0,
                desc:''
            });
        }
    }
    return(
        <Modal show={show} onHide={()=>handleSpendClose()}>
            <Modal.Header closeButton>
                <Modal.Title>Add Spending</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="formforIncome">
                    <Form.Label>Spending</Form.Label>
                    <Form.Control 
                        type="text"
                        name="amount" 
                        onBlur={(e)=>handleBlur(e)} 
                        placeholder="Enter income" 
                        required />
                </Form.Group>
                <Form.Group controlId="formDesc">
                    <Form.Label>Desctription</Form.Label>
                    <Form.Control 
                        type="text"
                        name="desc"
                        onBlur={(e)=>handleBlur(e)} 
                        placeholder="Desctription"   
                        required/>
                </Form.Group>
                <Button variant="primary" type="submit"  onClick={(e)=>handleSpendSaveClick(e)}>
                    Submit
                </Button>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>handleSpendClose()}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
    
})
export default SpendingModal
