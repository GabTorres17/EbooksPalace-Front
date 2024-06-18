import axios from "axios"
import { useState } from "react";

const { useState } = require("react"); axios
function UpLoadImage() {
    const [Url_image, setUrlImage] = useState('')

    const change = async (e) => {
        const file = e.target.files[0];
        const data = new FormData();

        data.append("file", file)
        data.append("upload_preset", "ebookspalace_preset")

        const response = await axios.post("https://api.cloudinary.com/v1_1/dwxr0uihx/image/upload", data)

        setUrlImage(response.data.secure_url)
    }
    return <>
        <h1>seleccionar imagen</h1>
        <div>
            <input type="file" accept="image/*" />
        </div>
        {Url_image && <div>
            <img src={Url_image} />
            <button>Eliminar imagen</button>
        </div>
        }
    </>
}
export default UpLoadImage
