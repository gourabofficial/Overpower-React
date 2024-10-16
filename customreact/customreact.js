function customRender(reactElement, container) {
    const domelement = document.createElement(reactElement.type)
//    domelement.innerHTML = reactElement.children;
//     domelement.setAttribute('href', reactElement.props.href);
//     domelement.setAttribute('target', reactElement.props.target)
    
    //         container.appendChild(domelement);
    
    domelement.innerHTML = reactElement.children;
    for (const prop in  reactElement.props) {
        domelement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domelement);

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me!'
}

const maincointainer = document.getElementById('root');

customRender(reactElement,maincointainer);