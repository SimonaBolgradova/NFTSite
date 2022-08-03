import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as cardService from '../services/cardService';

export const CardContext = createContext();

const cardReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CARDS':
            return action.payload.map(x => ({ ...x, comments: [] }));
        case 'ADD_CARD':
            return [...state, action.payload];
        case 'FETCH_CARD_DETAILS':
        case 'EDIT_CARD':
            return state.map(x => x._id === action.cardId ? action.payload : x);
        case 'ADD_COMMENT':
            return state.map(x => x._id === action.cardId ? { ...x, comments: [...x.comments, action.payload] } : x);
        case 'REMOVE_CARD':
            return state.filter(x => x._id !== action.cardId);
        default:
            return state;
    }
};

export const CardProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [cards, dispatch] = useReducer(cardReducer, []);

    useEffect(() => {
        cardService.getAll()
            .then(result => {
                const action = {
                    type: 'ADD_CARDS',
                    payload: result
                };

                dispatch(action);
            });
    }, []);

    const selectcard = (cardId) => {
        return cards.find(x => x._id === cardId) || {};
    };

    const fetchcardDetails = (cardId, cardDetails) => {
        dispatch({
            type: 'FETCH_card_DETAILS',
            payload: cardDetails,
            cardId,
        })
    }

    const addComment = (cardId, comment) => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment,
            cardId
        });
    };

    const cardAdd = (cardData) => {
        dispatch({
            type: 'ADD_card',
            payload: cardData,
        })

        navigate('/explore');
    };

    const cardEdit = (cardId, cardData) => {
        dispatch({
            type: 'EDIT_CARD',
            payload: cardData,
            cardId,
        });
    };

    const cardRemove = (cardId) => {
        dispatch({
            type: 'REMOVE_CARD',
            cardId
        })
    }
    return (
        <CardContext.Provider value={{
            cards,
            cardAdd,
            cardEdit,
            addComment,
            fetchcardDetails,
            selectcard,
            cardRemove
        }}>
            {children}
        </CardContext.Provider>
    );
}