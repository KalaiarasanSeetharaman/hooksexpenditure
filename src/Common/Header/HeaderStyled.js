import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const MainContainer = styled(Container)({
    background: '#afa8a89c',
    height: '100px'
})

export const Balance = styled.span({
    fontWeight: 'bold',
    fontSize:'16px'
})

export const IncomeTitle = styled.h6({
    margin: '0px',
    lineHeight: '22px',
    color:'green'
})

export const TotalIncome = styled.span({
    color:'green'
})

export const SpendTitle = styled.h6({
    margin: '0px',
    lineHeight: '22px',
    color:'red'
})

export const TotalSpending = styled.span({
    color:'red'
})