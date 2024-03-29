const root = document.querySelector('#div')
const reactElement = {
    type : 'a',
    props : {
        href : 'www.google.com',
        target : '__blank' 
    },
    text : 'Click me'
}
function addElement(element, location) {
    const element = document.createElement(`${this.element.type}`)
    const location = this.location
    element.innerHTML = `value = '${this.element.text}' href ='${this.element.props.href} target = '${this.element.props.target}'`
    location.appendChild(element)
}
addElement(reactElement,root)