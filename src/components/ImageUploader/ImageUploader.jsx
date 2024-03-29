"use client"

import './ImageUploader.scss';
import { useState } from 'react';
import ShortUniqueId from 'short-unique-id';






 function ImageUploader(props) {
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState("")
    const [selectedfile, SetSelectedFile] = useState([]);
    const [Files, SetFiles] = useState([]);

    console.log(props.email)

    const uid = new ShortUniqueId({length: 10})

    const ImgDisplay = () => {
        return(
            selectedfile.map((data, index) => {
                const { id, filename, fileimage, } = data;
                return (
                    <div className="file-atc-box" key={id}>
                        {
                            filename.match(/.(jpg|jpeg|png)$/i) ?
                                <div className="file-image"> <img src={fileimage} alt="" /></div> :
                                <div className="file-image"><i className="far fa-file-alt"></i></div>
                        }
                        <div className="file-detail">
                            <div className="file-actions">
                                <button type="button" className="file-action-btn" onClick={() => DeleteSelectFile(id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }


    const filesizes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    const InputChange = (e) => {
        // --For Multiple File Input
        console.log(e.target.files)
        let images = [];
        for (let i = 0; i < e.target.files.length; i++) {
            images.push((e.target.files[i]));
            let reader = new FileReader();
            let file = e.target.files[i];
            

            reader.onloadend = () => {
                SetSelectedFile((preValue) => {
                    return [
                        ...preValue,
                        {
                            id: uid.rnd(),
                            filename: e.target.files[i].name,
                            filetype: e.target.files[i].type,
                            fileimage: reader.result,
                            datetime: e.target.files[i].lastModifiedDate.toLocaleString('en-IN'),
                            filesize: filesizes(e.target.files[i].size)
                        }
                    ]
                });
                
            }
            if (e.target.files[i]) {
                reader.readAsDataURL(file);
            }
        }
    }


    const DeleteSelectFile = (id) => {
            const result = selectedfile.filter((data) => data.id !== id);
            SetSelectedFile(result);
            if (result.length == 0) {
                document.getElementById("insert").style.display = "flex"
                document.getElementById("firstImg").style.display = "none"
            }
    }
    let postimages = []
     for (let i = 0; selectedfile.length > i; i++) {
        postimages.push(selectedfile[i].fileimage)
     }

     const submitPost = async () => {

         let body = {
             name: model,
             brand: brand,
             category: category,
             price: price,
             image: postimages,
             authorId: props.email

         }
         try {
             await fetch(`/api/products/post/`, {
                 method: 'POST',
                 headers: { 'Content-type': 'application/json' },
                 body: JSON.stringify(body)
             })
         } catch (error) {
             console.error(error)
         }
     }

     
     if (selectedfile.length > 0) {
         document.getElementById("insert").style.display = "none"
         document.getElementById("firstImg").style.display = "flex"
        }
     
     
     

    return (

        
                    <div className="card mt-5">
                        <div className="card-body">
                            <div className="kb-data-box">
                                

                                    <div className="kb-modal-data-title">
                                        
                                    </div>

                                    <div className="kb-file-upload" id='insert'>
                                        <div className="file-upload-box" >
                                            <input type="file" id="fileupload" className="file-upload-input" onChange={InputChange} multiple />
                                            <span>Déposez vos photos ici</span>
                                        </div>
                                    </div>
                                    <div className="kb-attach-box mb-3" id='firstImg'>
                                        <div className="file-upload-box" >
                                        <ImgDisplay/>
                                        </div>
                                    </div>
                                    
                                    <div className='inputSection'>
                                        <div className='inputBox'>
                                            <input type='text' onChange={(e) => setCategory(e.target.value)} required /><i>Categorie</i>
                                        </div>
                                        <div className='inputBox'>
                                            <input type='text' onChange={(e) => setBrand(e.target.value)} required/><i>Marque</i>
                                        </div>
                                        
                                        <div className='inputBox'>
                                            <input type='text' onChange={(e) => setModel(e.target.value)} required/><i>Model</i>
                                        </div>
                                        <div className='inputBox'>
                                            <input type='text' onChange={(e) => setCategory(e.target.value)} required /><i>Couleur</i>
                                        </div>
                                        <div className='inputBox'>
                                            <input type='text' onChange={(e) => setCategory(e.target.value)} required /><i>Taille</i>
                                        </div>
                                        <div className='inputBox'>
                                            <input type='number' min="1" onChange={(e) => setPrice(e.target.value)} required /><i>Prix (€)</i>
                                        </div>
                                    </div>
                                    <div className='inputSectionDesc'>
                                        <div className='inputBoxDesc'>
                                            <textarea maxLength={200} required/><i>Description</i>
                                        </div>
                                    </div>
                                    <div className='submitButton'>
                                        <button type='submit' onClick={submitPost}>Publier</button>
                                    </div>
                                
                            </div>
                        </div>
                    </div>


    );
}

export default ImageUploader;
