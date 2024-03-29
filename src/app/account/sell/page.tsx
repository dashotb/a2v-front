
import { NextPage } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { redirect } from "next/navigation";
import ImageUploader from "../../../components/ImageUploader/ImageUploader.jsx"
import "./style.scss"




    

const Sell:NextPage = async () => {
    const session = await getServerSession(authOptions)

    if (session) {
        return (
            <main className="main">
                <div className="display">
                    <div className="nav">
                        <a href="/account"><p className="select_nav">Vitrine</p></a>
                        <h4 className="select_nav" id="selected">Vendre</h4>
                        <a href="/account/settings"><p className="select_nav">Parametres</p></a>
                    </div>
                    <div className="display_box">
                        
                            
                                <div className="signin">

                                    <div className="content">

                                        <ImageUploader
                                        email={session.user?.email}
                                        />

                                    </div>
                                </div>
                        

                    </div>

                </div>


            </main>
        )
    }
    return (
        redirect('/account/login')
    )
}

export default Sell;
