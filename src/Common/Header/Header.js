import React from 'react';
import * as HeaderStyle from './HeaderStyled';
import { Row, Col } from 'react-bootstrap';
const Header =({balance,totalSpending,totalIncome})=>{
    return(
        <HeaderStyle.MainContainer fluid>
            <header>
                <Row>
                    <Col md={12}>
                        <h4>
                            Balance 
                        </h4>
                    </Col>
                    <Col md={12}>
                        <HeaderStyle.Balance>
                            {balance}Kc 
                        </HeaderStyle.Balance>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={6}>
                        <Row>
                            <Col md={4} xs={4}>
                                <HeaderStyle.IncomeTitle>
                                Income:  
                                </HeaderStyle.IncomeTitle>
                            </Col>
                            <Col md={6} xs={6}>
                                <HeaderStyle.TotalIncome>
                                    {totalIncome}Kc 
                                </HeaderStyle.TotalIncome>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} xs={6}>
                        <Row>
                            <Col md={4} xs={4}>
                                <HeaderStyle.SpendTitle>
                                Spendings:  
                                </HeaderStyle.SpendTitle>
                            </Col>
                            <Col md={6} xs={6}>
                                <HeaderStyle.TotalSpending>
                                    {totalSpending}Kc 
                                </HeaderStyle.TotalSpending>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </header>
        </HeaderStyle.MainContainer>
    )
}
export default Header;