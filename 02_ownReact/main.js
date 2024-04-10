console.log('Script Connected');

const root = document.querySelector('#root')
console.log(root)
const reactElement = {
    type : 'a',
    props : {
        href : 'www.google.com',
        target : '__blank' 
    },
    text : 'Click me'
}
function addElement(element, location) {
    let newElement = document.createElement(element.type)
    newElement.innerText = element.text
    newElement.href = element.props.href
    newElement.target = element.props.target
    console.log(newElement)
    location.appendChild(newElement)
}
addElement(reactElement,root)