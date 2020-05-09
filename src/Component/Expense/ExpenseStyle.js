import styled from 'styled-components';
import { Card, Row, ListGroup } from 'react-bootstrap';

export const SpendingLists = styled(Card)({
    margin: '0px auto',
    marginTop: '11px',
    marginBottom: '9px',
    padding: '13px',
    marginLeft: '13px',
    marginRight: '13px',
    backgroundColor: '#29242405'
})

export const FooterRow = styled(Row)({
    textAlign: 'center'
})

export const RedList = styled.span({
    color:'red',
    fontWeight:'bold'
})

export const GreenList = styled.span({
    color:'green',
    fontWeight:'bold'
})

export const ListGroupItem = styled(ListGroup.Item)({
    backgroundColor: '#29242405',
    border: '1px solid rgba(0,0,0,.125)'
})

export const PaginationHeader = styled.div({
    margin:'0 auto'
})