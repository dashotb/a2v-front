export const ImgViewer = (props) => {
var thumbnails = document.getElementById("thumbnails")
if(thumbnails != null){

    var imgs = thumbnails.getElementsByTagName("img")
    var main = document.getElementById("main")
    var counter = 0;
    for (let i = 0; i < imgs.length; i++) {
        let img = imgs[i]
    
    
        img.addEventListener("click", function () {
            main.src = this.src
        })
    
    }
}
return(
    <>
        <div className="image_list" id="thumbnails">
            <img src={props.images[0]} />
            <img src={props.images[1]} />
            <img src={props.images[2]} />
            <img src={props.images[3]} />
        </div>
        <div className="product_image">
            <img src={props.images[0]} alt="loading..." className='productImageSingle' id="main"></img>
        </div>
    </>
)
}