const Pet = (props) => {
    return React.createElement("div",{},[
        React.createElement("h1",{},props.name),
        React.createElement("h2",{},props.animal),
        React.createElement("h2",{},props.breed)
        
    ])
}

const App = () =>{
    return React.createElement(
        "div",{},
        [
        React.createElement("h1",{},"ADOPT ME!"),
        React.createElement(Pet,{
            animal:"dog",
            name:"ronu",
            breed:"kantri"
        }),
        React.createElement(Pet,{
            animal:"cat",
            name:"misty",
            breed:"mix persian"
        }),
        React.createElement(Pet,{
            animal:"dog",
            name:"jacky",
            breed:"kantri"
        }),
        ] 
        )
};

const container= document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));  