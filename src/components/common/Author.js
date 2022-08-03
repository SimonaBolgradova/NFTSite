import { useContext } from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";
import { CardContext } from "../../contexts/CardContext";

const Author = ({ children }) => {
    const { selectCard } = useContext(CardContext);
    const { user, isAuthenticated } = useAuthContext();
    const { cardId } = useParams();

    const currentCard = selectCard(cardId);

    if (isAuthenticated && user._id !== currentCard._ownerId) {
        return <Navigate to='/explore' replace />
    }

    return children ? children : <Outlet />;
};

export default Author;