import React  from 'react';
import { Container, Button,  ListGroup,  Col } from 'react-bootstrap';
import {SpendingLists, FooterRow} from './ExpenseStyle';
import ExpenseLists from './ExpenseLists';
const Expense = React.memo(({lists, handleIncome, handleSpend, deleteItem}) => {
        return(
            <Container fluid style={{padding:'0px'}}>
                <SpendingLists>
                    <ListGroup variant="flush">
                        <ExpenseLists 
                            expenselists={lists} 
                            deleteItem={deleteItem}
                        />
                    </ListGroup>
                </SpendingLists>
                <Col md={12} xs={12}>
                    <FooterRow>
                        <Col md={12} xs={12}>
                            <Button 
                                onClick={()=>handleIncome()} 
                                variant="success"
                                style={{marginRight:'10px'}}
                            >
                                Add Income
                            </Button> 
                            <Button 
                                onClick={()=>handleSpend()}
                                variant="danger">
                                Add Spending
                            </Button>
                        </Col>
                    </FooterRow>
                </Col>
            </Container>
        )    
})
export default Expense