gsap.registerPlugin(Draggable);

const draggableZone = document.querySelector(".draggable-zone")

Draggable.create(".box", {
    bounds: draggableZone,
    autoScroll: true,
    minimumMovement: 20,
    edgeResistance: 0,

    onDrag: function () {
        const element = document.querySelector('.topZone')
        const parent = this.target.parentElement
        const target = this.target

        if (this.hitTest(element, 10) && element != parent) {
            element.appendChild(target)
            this.applyBounds('.topZone')
            target.style.width = "100%"
            target.style.height = "100%"
        }
        else if (!this.hitTest(element, 10) && parent != draggableZone) {
            target.style.width = "5rem"
            target.style.height = "5rem"
            draggableZone.appendChild(target)
            this.applyBounds(draggableZone)
        }
    }
});