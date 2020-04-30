import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import './styles/tailwind.css';
import List from './containers/List'

/*ReactDOM.render(
<div className="container  bg-gray-900 mx-auto">
    <List />
</div>, 
document.getElementById('root')
)*/
const App = () => {
    return (
        <Fragment>
            <nav className="flex flex-wrap p-6 bg-gray-900 border-b-2">
                <a href="#" className="flex item-center flex-shrink-0 text-white mr6 text-3xl">
                    OMDB App
                </a>
            </nav>
            <main className="bg-gray-900">
                <div className="container">
                    <List/>
                </div>
            </main>
        </Fragment>
        
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
