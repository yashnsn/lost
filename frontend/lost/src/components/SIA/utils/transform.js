
export function toSia(data, image, type){
    
    if (type === 'bBox'){
        const w = image.width * data.w
        const h = image.height * data.h
        return {
            x: image.width * data.x - w/2.0,
            y: image.height * data.y - h/2.0,
            w: w,
            h: h
        }
    }
}