import {Navigate, Route} from "react-router-dom"

const CustomRoute = ({children, condition, onFailNavigateTo}) => {
    
    if(!condition){
        return <Navigate to={onFailNavigateTo || "/"}/>
        /* return (
            <Route {...rest} element={<Navigate to={navigateTo || "/"}/>} />
        ) */
    }
    return children;

}

export default CustomRoute;