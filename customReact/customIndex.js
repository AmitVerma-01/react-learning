function customRender(reactElement , container){
    const domEle = document.createElement(reactElement.type);
    domEle.innerHTML= reactElement.children;
    domEle.setAttribute('href',reactElement.props.href);
    domEle.setAttribute('target',reactElement.props.target);
    container.appendChild(domEle);
}
function customRender2(reactElement,container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for(let prop in reactElement.props){
        if(prop == 'children') continue
        domElement.setAttribute(prop , reactElement.props[prop])
    }
    container.appendChild(domElement);
}

const reactElement = {
    type : 'a',
    props: {
        href : "https://google.com",
        target : "_blank"
    },
    children : "click me to visit google"
}


const mainContainer = document.querySelector("#root");

// customRender(reactElement,mainContainer);
customRender2(reactElement,mainContainer);

