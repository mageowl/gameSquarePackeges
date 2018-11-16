var VolManeger = {
    VolManegerVolObject: class extends GameSquare.GameSquareCostomTemplate {
        constructor(props) {
            super("VolManegerVolObject")
    
            this.vX = 0
            this.vY = 0
            this.renderObject = props.renderObject
            this.friction = props.friction
        }
    
        render() {
            this.renderObject.render()
        }
    
        updateVol() {
            this.vX *= this.friction
            this.vY *= this.friction
        }
    },
    
}

export { VolManeger }