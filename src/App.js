import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import HeaderConteiner from "./components/Header/HeaderConteiner";
import {connect, Provider} from "react-redux";
import Preloader from "./components/compon/preloader/preloader";
import {store} from "./redux/store";
import {getEntrance} from "./redux/select_repository";
import {compose} from "redux";
import {getRepository} from "./components/API/api";



class App extends React.Component {
    componentDidMount() {
        this.props.getRepository();
    };

    render() {
        if (!this.props.entrance) {
            return <Preloader/>
        }
        return (
            <div className="app">
                <HeaderConteiner/>
        </div>

        )
    }
}

let mapStateToProps = (state)=>{
    return {
        entrance: getEntrance(state),
    }
}

let AppConteiner = compose(
    connect(mapStateToProps,{getRepository}),
)(App)

let NewAppMy = (props) => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <AppConteiner/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default NewAppMy;