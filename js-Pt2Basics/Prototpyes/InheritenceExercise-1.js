
// INHERITENCE EXERCISE 
// create two objecst with one method click 
// prototype has focus w/ console.log statesment

function HtmlElement(){
    this.click = function(){
        console.log('clicked')
    }
}

HtmlElement.prototype.focus = function(){
    console.log('focused')

    function HtmlSelectElement(items = []){
        this.items = items

        this.addItem = function(item){
            this.items.push(item)
        }

        this.removeItem = function(item){
            this.items.splice(this.items.indexOf(item), 1)
        }
    }


}

// baseHtmlSelectElement

HtmlSelectElement.prototype = new HtmlElement()

HtmlSelectElement.prototype.constructor = HtmlSelectElement
